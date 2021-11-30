import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentesRoutingModule } from './componentes-routing.module';
import { ProductoComponent } from './producto/producto.component';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductoComponent,
  
  ],
  imports: [
    CommonModule,
    ComponentesRoutingModule,
    RouterModule,
    
    
    
  ], exports:[
    ProductoComponent
  ]
})
export class ComponentesModule { }
