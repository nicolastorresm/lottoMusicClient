import { Component, OnInit } from '@angular/core';
import { ApuestasService } from '../../protected/apuestas/services/apuestas.service';
import { ApuestaActiva } from '../../modelo/VideoApuesta';
import { ApuestaProducto } from '../../protected/apuestas/interfaces/IApuesta';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styles: [
  ]
})
export class ProductoListComponent implements OnInit {

  constructor(private apuestaService:ApuestasService) { }


  async ngOnInit(): Promise<void> {

    
   
   }
   
}

