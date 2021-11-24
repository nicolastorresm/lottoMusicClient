import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoApuestasComponent } from './apuestas/pages/listado-apuestas/listado-apuestas.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path:'',
    component:DashboardComponent,
    children:[
      {path: 'lista-apuestas',component:ListadoApuestasComponent},
      {path:'**', redirectTo:''}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
/* 

{
  path:'',
  component:DashboardComponent,
  children:[

    {path: 'listado',component: ListadoComponent,canActivate:[AuthGuard]},
    {path: 'agregar',component: AgregarComponent, canActivate:[AuthGuard]},
    {path: 'agregarapuesta',component: AgregarApuestaComponent, canActivate:[AuthGuard]},
    { path: ':id',component: VideoComponent,canActivate:[AuthGuard]},
    {path: 'editar/:id',component: AgregarComponent, canActivate:[AuthGuard]},
    
    {path: '**', redirectTo:''}
  ]
} */