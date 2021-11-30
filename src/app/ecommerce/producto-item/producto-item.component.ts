import { ApuestaVenta } from './../../protected/apuestas/interfaces/IApuesta';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output,EventEmitter} from '@angular/core';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ApuestaProducto, ApuestaUsuario } from '../../protected/apuestas/interfaces/IApuesta';
import { MessageService } from '../../services/message.service';
import { ApuestaProductoModel, ApuestaUsuarioModel, ApuestaVentaModel } from '../../modelo/apuesta';
import { ModalComponent } from '../modal/modal.component';
import { NgForm, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';




@Component({
  selector: 'app-producto-item',
  templateUrl: './producto-item.component.html',
  styles: [
  ]
})
export class ProductoItemComponent implements OnInit {
  



@Input() productoApuesta:ApuestaProductoModel

@Output() onNuevaApuesta: EventEmitter<ApuestaVenta> = new EventEmitter();

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
  
  constructor(private modalService:NgbModal,
              private messageService:MessageService,
              private httpClient:HttpClient,
              private fb:FormBuilder) { 
                
              }

             name:string
             
              agregarAlCarrito():void{
                console.log("sending, agregar al carrito")
                console.log("dislike formulario", this.miFormulario.value.dislikes)
                console.log("mensaje a enviar", this.productoApuesta)
                

                console.log("El valor de producto apuestas antes de enviar", this.productoApuesta)
                this.messageService.sendMessage(this.productoApuesta)
                this.modalService.dismissAll(); //dismiss the modal
              }

              


             

              agregarApuestaUsuario( ){
                console.log("agregar apuesta usuario")
                this.apuestaUsuario.apuesta = this.productoApuesta.apuesta
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

                this.onNuevaApuesta.emit(json)

                console.log("se introdujo a onnuveopersonaje")

                this.messageService.sendMessage(this.productoApuesta)
        
               
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

 







  ngOnInit(): void {
  }

  

}
