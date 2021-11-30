import { Apuesta, Estadistica, Video,ApuestaProducto,ApuestaVenta,ApuestaUsuario} from './../protected/apuestas/interfaces/IApuesta';
import { Usuario } from './Usuario';

export class ApuestaModel implements Apuesta {
    id:               number;
    video:            Video;
    activo:           boolean;
    fechahoraapuesta: string;
    precioc:          number;
    preciov:          number;
    preciol:          number;
    preciod:          number;
}

export class EstadisticaModel implements Estadistica {
    vistas:string;
    comentarios:string;
    likes:string;
    dislikes:string;
}

export class VideoModel implements Video {
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

export class ApuestaProductoModel implements ApuestaProducto{
    constructor(
       public apuesta    : Apuesta,
       public comentarios: string,
       public likes      : string,
       public dislikes   : string,
       public vistas     : string,
       public idVideo    : string,
    ){}
    }
   
 export class ApuestaVentaModel implements ApuestaVenta{
    
      apuesta    : Apuesta
       comentarios: string;
       likes      : string;
       dislikes   : string;
       vistas     : string ;
       idVideo    : string ;
       idUsuario  : number;

       constructor(producto: ApuestaProductoModel){
           this.apuesta = producto.apuesta
       }
    
    
    }

    export class ApuestaUsuarioModel implements  ApuestaUsuario {
 
        apuesta :Apuesta;
        usuario: Usuario;
        vistas: number;
        comentarios: number;
        likes:number;
        dislikes: number
       constructor(){
           
              
       }
    
         }




