import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path:'',
    component:MainComponent,
    children:[
      {path: 'login',component:LoginComponent},
      {path: 'registro',component:RegisterComponent},
      {path:'**',redirectTo:'login'}
     /*  {path: 'listado',component: ListadoComponent,canActivate:[AuthGuard]},
  {path: 'agregar',component: AgregarComponent, canActivate:[AuthGuard]},
  {path: 'agregarapuesta',component: AgregarApuestaComponent, canActivate:[AuthGuard]},
  { path: ':id',component: VideoComponent,canActivate:[AuthGuard]},
  {path: 'editar/:id',component: AgregarComponent, canActivate:[AuthGuard]},
   */
 
    ]
  }


  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
