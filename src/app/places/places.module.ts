import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit/edit.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [
    EditComponent,
    DetailComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PlacesModule { }
