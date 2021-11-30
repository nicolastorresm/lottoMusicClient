import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { ListaApuestasComponent } from './lista-apuestas/lista-apuestas.component';
import { ListaApuestaItemComponent } from './lista-apuesta-item/lista-apuesta-item.component';



@NgModule({
  declarations: [
    CarritoComponent,
    CarritoItemComponent,
    PrincipalComponent,
    ProductoListComponent,
    ProductoItemComponent,
    PipeyoutubePipe,
    MainComponent,
    ListaApuestasComponent,
    ListaApuestaItemComponent,
    
    
   
  ],
  imports: [
    CommonModule,
    EcommerceRoutingModule,
    FontAwesomeModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  exports:[
    ProductoItemComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class EcommerceModule { }
