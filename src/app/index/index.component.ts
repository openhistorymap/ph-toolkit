import { Component, OnInit } from '@angular/core';
import { OhmPhService } from '../shared/ohm-ph.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(
    private ohm: OhmPhService,
    private ar: ActivatedRoute,
  ) {
    ohm.load();
   }

  ngOnInit(): void {
  }

}
