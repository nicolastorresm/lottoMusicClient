import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [

  { path:'carrito',  component:PrincipalComponent},
  { path:'ecommerce',  component:MainComponent},
   {path:'**', redirectTo:''}
    ]
  
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcommerceRoutingModule { }
