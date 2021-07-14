import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ChatComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ChatModule { }
