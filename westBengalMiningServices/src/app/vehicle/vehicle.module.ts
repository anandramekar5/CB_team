import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleRoutingModule } from './vehicle-routing.module';
import { VehicleComponent } from './vehicle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonmaterialModule } from '../commmonmaterial/commmonmaterial.module';


@NgModule({
  declarations: [
    VehicleComponent
  ],
  imports: [
    CommonModule,
    VehicleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonmaterialModule,
    HttpClientModule,
    
  ]
})
export class VehicleModule { }
