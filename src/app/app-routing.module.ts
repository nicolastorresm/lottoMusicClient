import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import ('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'ecommerce',
    loadChildren: () => import ('./ecommerce/ecommerce.module').then(m => m.EcommerceModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import ('./protected/protected.module').then(m => m.ProtectedModule)
  },
  /* {
    path: 'forgot-password',
    loadChildren: () => import ('./auth/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule)
  }, */
  {
    path: '**',
    redirectTo: 'auth'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
