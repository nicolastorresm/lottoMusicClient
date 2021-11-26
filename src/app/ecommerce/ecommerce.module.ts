import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { CarritoComponent } from './carrito/carrito.component';
import { CarritoItemComponent } from './carrito-item/carrito-item.component';
import { PrincipalComponent } from './principal/principal.component';
import { ProductoListComponent } from './producto-list/producto-list.component';
import { ProductoItemComponent } from './producto-item/producto-item.component';
import { ModalComponent } from './modal/modal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatIconModule} from '@angular/material/icon';
import { MaterialModule } from '../material/material.module';
import { PipeyoutubePipe } from '../pipe/pipeyoutube.pipe';



@NgModule({
  declarations: [
    CarritoComponent,
    CarritoItemComponent,
    PrincipalComponent,
    ProductoListComponent,
    ProductoItemComponent,
    PipeyoutubePipe
   
  ],
  imports: [
    CommonModule,
    EcommerceRoutingModule,
    FontAwesomeModule,
    MaterialModule,
    
  ]
})
export class EcommerceModule { }
