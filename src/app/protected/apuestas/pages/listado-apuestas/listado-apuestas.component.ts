import { Component, OnInit } from '@angular/core';
import { ApuestasService } from '../../services/apuestas.service';

import { VideoDeApuesta } from '../../../../auth/interfaces/video';
import { ApuestaActiva } from '../../../../modelo/VideoApuesta';
import { IVideo } from '../../interfaces/IApuesta';
import { YoutubeService } from '../../../../services/youtube.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



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

   

  ngOnInit(): void {
   
    this.apuestaService.getApuestasActivas()
   .subscribe( resp => {this.videosApuestasActivas = resp
     console.log(this.videosApuestasActivas) }   )

    
  }
  
    
  }
