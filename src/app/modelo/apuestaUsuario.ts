import { Usuario } from 'src/app/modelo/usuario';
import { Mvideo } from './video';


export class ApuestaUsuario {

    video               :Mvideo;
    usuario: Usuario;
    vistas: number;
    comentarios: number;
    likes:number;
    dislikes: number

    }