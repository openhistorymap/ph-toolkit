import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsModule } from '../events/events.module';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: 'folder', component: MainComponent, children:[
    {path: ':fid', children: [
      {path: 'sources', loadChildren: () => EventsModule, data:{name: 'sources'}},
      {path: 'events', loadChildren: () => EventsModule, data:{name: 'events'}},
    ]}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FolderRoutingModule { }
