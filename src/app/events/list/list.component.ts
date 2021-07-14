import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  cols: any;
  dataSource: any = {};

  constructor(
    private ht: HttpClient,
    private ar: ActivatedRoute
  ) { }

  get displayedColumns(){
    if(this.cols)
      return this.cols.map(x=>x.name);
    else
      return [];
  }

  ngOnInit(): void {
    const name = this.ar.snapshot.data.name;

    this.ht.get('/assets/' + name + '/table.json').subscribe(data => {
      this.cols = data;
      
      this.ht.get<any[]>('/assets/' + name + '/data.json').subscribe(data=>{
        this.dataSource = data;
      });
    });

  }

}
