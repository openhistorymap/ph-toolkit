import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APP_CONFIG } from '../../../environments/environment';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {
  title = APP_CONFIG.name;
  folder;
  constructor(
    private ar: ActivatedRoute,
    private ht: HttpClient
  ) { }

  ngOnInit(): void {
    this.ar.params.subscribe(data=>{
      this.ht.get('/assets/folders.json').subscribe((fldrs:any)=> {
        this.folder = fldrs.folders.filter(x=>x.id === data.fid)[0];
        console.log(this.folder);
      })
    })
  }

}
