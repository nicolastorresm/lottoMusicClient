import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';

import { ApuestaActiva } from '../../../modelo/VideoApuesta';
import { Apuesta, ApuestaProducto, Estadistica } from '../interfaces/IApuesta';



@Injectable({
  providedIn: 'root'
})
export class ApuestasService {

 
  constructor(private http:HttpClient) { }
  private baseUrl = environment.baseUrl;
    

  getApuestasActivas(): Observable<ApuestaActiva[]>{
    let vinculo = `${this.baseUrl}/apuesta/activo`;
             return this.http.get(vinculo).pipe(
        map(resp => resp as ApuestaActiva[] 
       ))
  }  

  //Octavio




 

  private listaApuesta: Apuesta[] = [];
  private listaProductosApuesta: ApuestaProducto[] = [];


  getListaApuesta() {
    return this.listaApuesta;
  }

  getListaProductoApuesta() {
    return this.listaProductosApuesta;
  }

  
  private api_key = environment.api_key;
  private urlYoutube = environment.urlYoutube;
  private apuestaInit = 
     {
      "id": 0,
      "video": {
        "id": 0,
        "idVideo": "",
        "titulo": "",
        "urlVideo": "",
        "canal": "",
        "activo": false,
        "fechaVideo": "",
        "artista": "",
        "duracion": ""
      },
      "activo": true,
      "fechahoraapuesta": "2021-08-30 22:30",
      "precioc": 10.0,
      "preciov": 10.0,
      "preciol": 10.0,
      "preciod": 10.0
    
    

  };

  async getAllApuestas(): Promise<ApuestaProducto[]> {

    var listaAp: Apuesta[] = [];

    var elementoProducto: ApuestaProducto = {
      apuesta: {
        "id": 0,
        "video": {
          "id": 0,
          "idVideo": "",
          "titulo": "",
          "urlVideo": "",
          "canal": "",
          "activo": false,
          "fechaVideo": "",
          "artista": "",
          "duracion": ""
        },
        "activo": true,
        "fechahoraapuesta": "2021-08-30 22:30",
        "precioc": 10.0,
        "preciov": 10.0,
        "preciol": 10.0,
        "preciod": 10.0
      },
      comentarios: "",
      dislikes: "",
      idVideo: "",
      likes: "",
      vistas: ""

    };


    const data = await this.getApuestasOnly(); // obtener las apuestas del servicio getapuestas only

    for (const apuesta of data) {

      var elementoProducto: ApuestaProducto = {
        apuesta: {
          "id": 0,
          "video": {
            "id": 0,
            "idVideo": "",
            "titulo": "",
            "urlVideo": "",
            "canal": "",
            "activo": false,
            "fechaVideo": "",
            "artista": "",
            "duracion": ""
          },
          "activo": true,
          "fechahoraapuesta": "2021-08-30 22:30",
          "precioc": 10.0,
          "preciov": 10.0,
          "preciol": 10.0,
          "preciod": 10.0
        },
        comentarios: "",
        dislikes: "",
        idVideo: "",
        likes: "",
        vistas: ""
  
      };

      elementoProducto.comentarios ="";
      elementoProducto.vistas ="";
      elementoProducto.apuesta = this.apuestaInit;


      const est = await this.getEstadisticas(apuesta); //3 consume estadistica
      console.log("apuesta",apuesta);
      console.log("est",est);
      
      
      elementoProducto.apuesta = apuesta,
      elementoProducto.comentarios = est.comentarios;
      elementoProducto.vistas = est.vistas;
      elementoProducto.likes = est.likes;
      elementoProducto.dislikes = est.dislikes;
      
      //console.info("antes elemento produto insertado dentro del for",elementoProducto);
      this.listaProductosApuesta.push(elementoProducto);

     // console.info("despues elemento produto insertado dentro del for",elementoProducto);

    }

    console.log("listaProductoApuesta", this.listaProductosApuesta);


    console.log("total en lista de productos", this.listaProductosApuesta.length);

    return this.listaProductosApuesta
  }

// 1.-  activo
  async getApuestasOnly(): Promise<Apuesta[]> {

    var lista: Apuesta[] = [];

    let promesa = new Promise<Apuesta[]>((resolve) => {
      this.http.get(`${this.baseUrl}/apuesta/activo`, { observe: 'body' }).toPromise().then(resp => {
        var sttigJson: string = JSON.stringify(resp);
        var json = JSON.parse(sttigJson);
        lista = json;
        resolve(lista);
        
      })
    });


    return promesa;

  }


/*   obtenerVideosEstadistica(idVideo2: any) {
    const parametros = new HttpParams().set('part', 'statistics').set('id', idVideo2).set('key', this.api_key);
    let vinculo = `${this.urlVideo}/videos`; //https://www.googleapis.com/youtube/v3
    //return this._http.get(vinculo); setear los parametros
    console.log(vinculo)
    console.log("estamos en estadistica");
    console.log("el id_video es " + idVideo2);
    return this._http.get(vinculo, { params: parametros }).pipe(map(resp => resp));
  } */

  async getEstadisticas(apuesta: Apuesta): Promise<Estadistica> {

    var est: Estadistica ={"comentarios":"","dislikes":"","likes":"","vistas":""};
    var parametros = new HttpParams().set('part', 'statistics').set('id', apuesta.video.idVideo).set('key', this.api_key);
    let promesa = new Promise<Estadistica>((resolve) => {
      this.http.get(`${this.urlYoutube}`, { params: parametros, observe: 'body' }).toPromise().then(resp => {
        var sttigJson: string = JSON.stringify(resp);
        var json = JSON.parse(sttigJson);

        est.vistas = json['items'][0]['statistics']['viewCount'];
        est.comentarios = json['items'][0]['statistics']['commentCount'];
        est.likes = json['items'][0]['statistics']['likeCount'];
        est.dislikes = json['items'][0]['statistics']['dislikeCount'];

        resolve(est);

      })

    });


    return promesa;


  }




 
 



  
  }



