import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsModule } from '../events/events.module';
import { ActivitiesComponent } from './activities/activities.component';
import { ListComponent } from './list/list.component';
import { MainComponent } from './main/main.component';
import { NewComponent } from './new/new.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { WrapperComponent } from './wrapper/wrapper.component';

const routes: Routes = [
  {path: 'folder', component: MainComponent, children:[
    {path: '', component: ListComponent},
    {path: 'new', pathMatch:'full', component: NewComponent},
    {path: ':fid', component: WrapperComponent, children: [
      {path: '', component: ActivitiesComponent},
      {path: 'sources', loadChildren: () => EventsModule, data:{name: 'sources'}},
      {path: 'events', loadChildren: () => EventsModule, data:{name: 'events'}},
      {path: 'people', loadChildren: () => EventsModule, data:{name: 'people', canAdd:['events']}},
      {path: 'places', loadChildren: () => EventsModule, data:{name: 'places'}},
    ]}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FolderRoutingModule { }
