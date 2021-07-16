import { Component, OnInit } from '@angular/core';
import { APP_CONFIG } from '../../../environments/environment';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {
  title = APP_CONFIG.name;

  constructor() { }

  ngOnInit(): void {
  }

}
