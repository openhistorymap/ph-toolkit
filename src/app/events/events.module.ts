import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './edit/edit.component';
import { SharedModule } from '../shared/shared.module';
import { EventsRoutingModule } from './events-routing.module';

@NgModule({
  declarations: [
    ListComponent,
    DetailComponent,
    EditComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    EventsRoutingModule
  ]
})
export class EventsModule {}
