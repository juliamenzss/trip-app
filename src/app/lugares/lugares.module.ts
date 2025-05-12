import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LugaresRoutingModule } from './lugares-routing.module';
import { LugarComponent } from './lugar/lugar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LugarComponent
  ],
  imports: [
    CommonModule,
    LugaresRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class LugaresModule { }
