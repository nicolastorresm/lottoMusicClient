export class VideoDeApuesta {
    constructor(
        public id:        number,
        public idVideo:    string,
        public titulo:     string,
        public urlVideo:   string,
        public canal:      string,
        public activo:     boolean,
        public fechaVideo: string,
        public artista:    string,
        public duracion:   string
    ){}
    
    get tituloCancion(){
        return `${this.artista} ${this.titulo}`;
    }
    } 