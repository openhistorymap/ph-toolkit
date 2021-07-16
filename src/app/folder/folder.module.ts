import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FolderRoutingModule } from './folder-routing.module';
import { ChatModule } from '../chat/chat.module';
import { WrapperComponent } from './wrapper/wrapper.component';
import { NewComponent } from './new/new.component';
import { ListComponent } from './list/list.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ActivitiesComponent } from './activities/activities.component';



@NgModule({
  declarations: [
    MainComponent,
    WrapperComponent,
    NewComponent,
    ListComponent,
    ToolbarComponent,
    ActivitiesComponent
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
