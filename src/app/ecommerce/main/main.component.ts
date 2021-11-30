import { Component, OnInit } from '@angular/core';
import { ApuestasService } from '../../protected/apuestas/services/apuestas.service';
import { ApuestaActiva } from '../../modelo/VideoApuesta';
import { ApuestaProducto } from '../../protected/apuestas/interfaces/IApuesta';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [
  ]
})
export class MainComponent implements OnInit {
  constructor(private apuestaService:ApuestasService) { }

  videosApuestasActivas:ApuestaActiva[]

  listaProductosApuesta: ApuestaProducto[] = [];

  async ngOnInit(): Promise<void> {

    this.listaProductosApuesta = await this.apuestaService.getAllApuestas();
     console.log("lista en componenete",this.listaProductosApuesta)
  
   
   }
   

}
