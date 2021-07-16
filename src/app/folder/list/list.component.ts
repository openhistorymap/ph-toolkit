import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { APP_CONFIG } from '../../../environments/environment';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  title = APP_CONFIG.name;

  folders = [];

  constructor(
    private ht: HttpClient
  ) { }

  ngOnInit(): void {
    this.ht.get('/assets/folders.json').subscribe((data:any)=>{
      this.folders = data.folders;
    })
  }

}
