
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListadoApuestasComponent } from './apuestas/pages/listado-apuestas/listado-apuestas.component';





@NgModule({
  declarations: [
    DashboardComponent,
    ListadoApuestasComponent,
    
    
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
  

  ]
})
export class ProtectedModule { }
