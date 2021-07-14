import { Component, OnInit } from '@angular/core';
import { OhmPhService } from '../../shared/ohm-ph.service';
import { APP_CONFIG } from '../../../environments/environment';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  title = APP_CONFIG.name;

  constructor(
    private ohm: OhmPhService
  ) { }

  ngOnInit(): void {
    console.log(this.ohm.config);
  }

}
