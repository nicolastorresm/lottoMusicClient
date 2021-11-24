import { HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  //endpoint Canal search
  private urlSearch: string = "https://www.googleapis.com/youtube/v3";
  //endpoint Canal video
  private urlVideo: string = "https://www.googleapis.com/youtube/v3";
  //apiKey goole
  private api_key: string = "AIzaSyBj6Wf_9Bx_mjiP1jHtpIHR_O0TTfjTn40";
  //idCanal
  private canal: string = "UCjahao5wNhsCP5hd-J7Eb8g";

  constructor(private _http: HttpClient) { }

  obtenerVideosEstadistica(idVideo2: any) {
    const parametros = new HttpParams().set('part', 'statistics').set('id', idVideo2).set('key', this.api_key);
    let vinculo = `${this.urlVideo}/videos`;
    //return this._http.get(vinculo); setear los parametros
    console.log(vinculo)
    console.log("estamos en estadistica");
    console.log("el id_video es " + idVideo2);
    return this._http.get(vinculo, { params: parametros }).pipe(map(resp => resp));
  }
}
