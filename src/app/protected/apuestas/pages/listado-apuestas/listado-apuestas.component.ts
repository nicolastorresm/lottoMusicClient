import { Component, OnInit } from '@angular/core';
import { ApuestasService } from '../../services/apuestas.service';

import { VideoDeApuesta } from '../../../../auth/interfaces/video';
import { ApuestaActiva } from '../../../../modelo/VideoApuesta';

import { YoutubeService } from '../../../../services/youtube.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApuestaProducto } from '../../interfaces/IApuesta';



@Component({
  selector: 'app-listado-apuestas',
  templateUrl: './listado-apuestas.component.html',
  styles: [
  ]
})
export class ListadoApuestasComponent implements OnInit {

  videosApuestasActivas:ApuestaActiva[]
  
   
  constructor(private apuestaService:ApuestasService, 
    private youtubeService:YoutubeService,
   ) {
        
   }

   listaProductosApuesta: ApuestaProducto[] = [];

   async ngOnInit(): Promise<void> {
    this.listaProductosApuesta = await this.apuestaService.getAllApuestas();

    console.log("lista en componenete",this.listaProductosApuesta)
    /*this.apuestaService.getEstadisticas('VwoHNjMU0PU').subscribe(
      (data)=>{
        var sttigJson : string = JSON.stringify(data);
        var json = JSON.parse(sttigJson);
        console.log("vistas",json['items'][0]['statistics']['viewCount']);
        console.log("comentarios",json['items'][0]['statistics']['commentCount']);

      }*/
  
  }

  //Octavio
  
  
    
  }
