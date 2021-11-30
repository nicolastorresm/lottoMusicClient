import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from "@angular/core";
import { NgbModal,ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { ApuestasService } from '../../protected/apuestas/services/apuestas.service';
import { MessageService } from '../../services/message.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApuestaActiva } from '../../modelo/VideoApuesta';
import { ApuestaProducto,ApuestaVenta,ApuestaUsuario } from '../../protected/apuestas/interfaces/IApuesta';
import { ApuestaVentaModel } from '../../modelo/apuesta';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {


  constructor(private apuestaService:ApuestasService,
    private modalService:NgbModal,
              private messageService:MessageService,
              private httpClient:HttpClient,
              private fb:FormBuilder) { }

  videosApuestasActivas:ApuestaActiva[]

  listaProductosApuesta: ApuestaProducto[] = [];

  async ngOnInit(): Promise<void> {

    this.listaProductosApuesta = await this.apuestaService.getAllApuestas();
     console.log("lista en componenete",this.listaProductosApuesta)
  
      }

      



apuestaVentaModel = ApuestaVentaModel

closeResult:string;

lista: ApuestaVenta[] = [];

apuestaItem: ApuestaVentaModel[] = [];

apuestaUsuario: ApuestaUsuario = {
        apuesta :null,
        vistas: 0,
        comentarios: 0,
        likes:0,
        dislikes: 0
      }

      carritoItemsApuestas=[];


miFormulario: FormGroup = this.fb.group({
  apuesta: ['',[Validators.required, Validators.minLength(0)]],
  vistas:['',[Validators.required, Validators.minLength(0)]],
  comentarios:['',[Validators.required, Validators.minLength(0)]],
  likes:['',[Validators.required, Validators.minLength(0)]],
  dislikes: ['',[Validators.required, Validators.email]],
  
})
  
 
      

              


             

              agregarApuestaUsuario( ){
                console.log("agregar apuesta usuario")
               // this.apuestaUsuario.apuesta = this.productoApuesta.apuesta
                this.apuestaUsuario.vistas = this.miFormulario.value.vistas
                this.apuestaUsuario.comentarios = this.miFormulario.value.comentarios
                this.apuestaUsuario.likes = this.miFormulario.value.likes
                this.apuestaUsuario.dislikes = this.miFormulario.value.dislikes

                var sttigJson: string = JSON.stringify(this.apuestaUsuario);
                console.log("stringify Apuesta Usuario", sttigJson)
                var json = JSON.parse(sttigJson);
                console.log("JSON DESPUES DE STINGFY", json)
                //this.lista=json

                this.lista.push(json)

                
                console.log("lista push",this.lista)

          

                console.log("se introdujo a onnuveopersonaje")

              
        
               
                for (var val of this.lista){
                  console.log("valores",val)
                }

                

               
               

                              

                console.log("el arreglo con objeto octavio  ", this.lista)

                /* idApuesta:any
                const carItemApuesta = new ApuestaUsuarioModel(idApuesta)
                this.carritoItemsApuestas.push(carItemApuesta) */

                console.log("apuestausuario",this.apuestaUsuario)
                this.modalService.dismissAll(); //dismiss the modal
                

              }
            



  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
