import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputPrimaryComponent } from './components/input-primary/input-primary.component';
import { ButtonPrimaryComponent } from './components/button-primary/button-primary.component';

@NgModule({
  declarations: [
    InputPrimaryComponent,
    ButtonPrimaryComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    InputPrimaryComponent, 
    ReactiveFormsModule,
    InputPrimaryComponent,
    ButtonPrimaryComponent,
  ]
})
export class SharedModule { }
