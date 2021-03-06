import { Usuario } from '../../../modelo/Usuario';
export interface Estadistica{
    vistas:string,
    comentarios:string,
    likes:string;
    dislikes:string;
}

export interface Video {
    id:         number;
    idVideo:    string;
    titulo:     string;
    urlVideo:   string;
    canal:      string;
    activo:     boolean;
    fechaVideo: string;
    artista:    string;
    duracion:   string;
}


export interface Apuesta {
    id:               number;
    video:            Video;
    activo:           boolean;
    fechahoraapuesta: string;
    precioc:          number;
    preciov:          number;
    preciol:          number;
    preciod:          number;
}

export interface ApuestaProducto{
    apuesta    : Apuesta,
    comentarios: string;
    likes      : string;
    dislikes   : string;
    vistas     : string ;
    idVideo    : string ;
 
 }

 export interface ApuestaVenta{
    apuesta    : Apuesta,
    comentarios: string;
    likes      : string;
    dislikes   : string;
    vistas     : string ;
    idVideo    : string ;
    idUsuario  : number;
 
 }

 export interface ApuestaUsuario {
   

        apuesta :Apuesta;
        vistas: number;
        comentarios: number;
        likes:number;
        dislikes: number
       
    
         }
