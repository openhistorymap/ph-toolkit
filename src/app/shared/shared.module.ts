import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { PageNotFoundComponent } from './components/';
import { WebviewDirective } from './directives/';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { ObjectTypeComponent } from './components/object-type.component';
import { ArrayTypeComponent } from './components/array-type.component';
import { MultiSchemaTypeComponent } from './components/mutischema-type.component';

@NgModule({
  declarations: [PageNotFoundComponent, WebviewDirective],
  imports: [
    CommonModule, 
    TranslateModule, 
    FormsModule, 
    MaterialModule,  
    ReactiveFormsModule ,
    FormlyModule.forRoot({
      extras: {resetFieldOnHide: true},
      types:[
        { name: 'string', extends: 'input' },
        {
          name: 'number',
          extends: 'input',
          defaultOptions: {
            templateOptions: {
              type: 'number',
            },
          },
        },
        {
          name: 'integer',
          extends: 'input',
          defaultOptions: {
            templateOptions: {
              type: 'number',
            },
          },
        },
        { name: 'boolean', extends: 'checkbox' },
        { name: 'enum', extends: 'select' },
        { name: 'array', component: ArrayTypeComponent },
        { name: 'object', component: ObjectTypeComponent },
        { name: 'multischema', component: MultiSchemaTypeComponent },
      ]
    }), 
    FormlyMaterialModule  
  ],
  exports: [
    TranslateModule, 
    WebviewDirective, 
    FormsModule, 
    MaterialModule,
    ReactiveFormsModule,
    FormlyModule, 
    FormlyMaterialModule 
  ]
})
export class SharedModule {}
