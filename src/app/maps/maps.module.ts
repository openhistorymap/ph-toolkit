import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { GeoreferenceComponent } from './georeference/georeference.component';
import { DigitizeComponent } from './digitize/digitize.component';
import { EditComponent } from './edit/edit.component';
import { DetailComponent } from './detail/detail.component';



@NgModule({
  declarations: [
    ListComponent,
    GeoreferenceComponent,
    DigitizeComponent,
    EditComponent,
    DetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MapsModule { }
