
export interface ApuestasActivas {
    id:               number;
    video:            IVideo;
    activo:           boolean;
    fechahoraapuesta: string;
    precioc:          number;
    preciov:          number;
    preciol:          number;
    preciod:          number;
}

 interface IVideo {
    id:         number;
    idVideo:    string;
    titulo:     string;
    urlVideo:   string;
    canal:      string;
    activo:     boolean;
    fechaVideo: Date;
    artista:    string;
    duracion:   string;
}