import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './edit/edit.component';



@NgModule({
  declarations: [
    ListComponent,
    DetailComponent,
    EditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BuildingsModule { }
