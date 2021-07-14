import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FolderRoutingModule } from './folder-routing.module';
import { ChatModule } from '../chat/chat.module';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FolderRoutingModule,
    ChatModule
  ]
})
export class FolderModule { }
