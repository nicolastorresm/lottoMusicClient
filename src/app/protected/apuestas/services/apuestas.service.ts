import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IApuesta } from '../interfaces/IApuesta';
import { environment } from '../../../../environments/environment';
import { VideoDeApuesta } from '../../../auth/interfaces/video';
import { ApuestaActiva } from '../../../modelo/VideoApuesta';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Injectable({
  providedIn: 'root'
})
export class ApuestasService {

 
  constructor(private httpClient:HttpClient) { }
  private baseUrl = environment.baseUrl;
    

  getApuestasActivas(): Observable<ApuestaActiva[]>{
    let vinculo = `${this.baseUrl}/apuesta/activo`;
             return this.httpClient.get(vinculo).pipe(
        map(resp => resp as ApuestaActiva[] 
       ))
  }  

  

  getApuestasPrueba(){
    return this.httpClient.get(`${this.baseUrl}/apuesta/activo`)
  }

  getApuestas(){
      return this.httpClient.get(`${this.baseUrl}/apuesta/activo`)
      .pipe(
        map(
          (videos:any) =>videos.map(
            video=>{
              console.log("videos map", video! )
            }
          )
        )
      )
  }

 



  
  }



