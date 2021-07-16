import { Component, OnInit } from '@angular/core';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';

import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  form: FormGroup;
  model: any;
  options: FormlyFormOptions;
  fields: FormlyFieldConfig[];
  loaded = false;

  type: string;

  constructor(
    private formlyJsonschema: FormlyJsonschema,
    private ar: ActivatedRoute,
    private ht: HttpClient
  ) { }

  ngOnInit(): void {
    this.ar.data.subscribe(dat => {
      const name = dat.name;
      this.ht.get('/assets/'+name+'/form.json').pipe(
        tap((x:any) => {
          this.form = new FormGroup({});
          this.type = name;
          this.options = {};
          this.fields = [this.formlyJsonschema.toFieldConfig(x.schema)];
        })
      ).subscribe(x => {
        this.loaded = true;
      });
    }); 
  }
}
