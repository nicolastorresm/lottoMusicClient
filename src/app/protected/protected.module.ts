import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListadoApuestasComponent } from './apuestas/pages/listado-apuestas/listado-apuestas.component';
import { SafeurlPipe } from './pipe/safeurl.pipe';

@NgModule({
  declarations: [
    DashboardComponent,
    ListadoApuestasComponent,
    SafeurlPipe
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule
  ]
})
export class ProtectedModule { }
