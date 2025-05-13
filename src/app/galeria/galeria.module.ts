import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GaleriaRoutingModule } from './galeria-routing.module';
import { GaleriaComponent } from './galeria/galeria.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from "../shared/shared.module";


@NgModule({
  declarations: [
    GaleriaComponent
  ],
  imports: [
    CommonModule,
    GaleriaRoutingModule,
    FormsModule,
    SharedModule
]
})
export class GaleriaModule { }
