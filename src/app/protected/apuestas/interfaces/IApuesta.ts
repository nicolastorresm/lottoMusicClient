import { Mvideo } from '../../../modelo/video';
export interface IApuesta {
    
    activo              :boolean;
    fechahoraapuesta    :string;
    precioc             :number;
    preciod             :number;
    preciol             :number;
    preciov             :number;
    video               :Mvideo;
} 

export interface IVideo {
    id?:         number;
    idVideo:    string;
    titulo:     string;
    urlVideo:   string;
    canal:      string;
    activo:     boolean;
    fechaVideo: string;
    artista:    string;
    duracion:   string;
}