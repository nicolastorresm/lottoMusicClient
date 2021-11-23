import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MainComponent } from './pages/main/main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListaVideosComponent } from './protected/videos/pages/lista-videos/lista-videos.component';
import { ListaApuestasComponent } from './protected/videos/pages/lista-apuestas/lista-apuestas.component';
import { DashboardComponent } from './protected/dashboard/dashboard/dashboard.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    MainComponent,
    ListaVideosComponent,
    ListaApuestasComponent,
    DashboardComponent
   
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
