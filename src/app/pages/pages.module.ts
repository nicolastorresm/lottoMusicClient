import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ComponentesModule } from '../componentes/componentes.module';
import { HomeComponent } from './home/home.component';
import { PipeyoutubePipe } from '../pipe/pipeyoutube.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    PipeyoutubePipe
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentesModule,
    ReactiveFormsModule,
    FormsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PagesModule { }
