import { Component, Input, OnInit } from '@angular/core';
import { ProductoItemComponent } from '../producto-item/producto-item.component'; 
import { MessageService } from '../../services/message.service';
import { ApuestaProducto, ApuestaVenta, ApuestaUsuario } from '../../protected/apuestas/interfaces/IApuesta';
import { ApuestaProductoModel, ApuestaVentaModel, ApuestaUsuarioModel } from '../../modelo/apuesta';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styles: [
  ]
})
export class CarritoComponent implements OnInit {

  @Input()

  
  
  @Input() carritoApuesta: ApuestaVenta

  @Input() items:any = {} // lista q hujo

   carritoItems=[];

  

   
agregarNuevoPersonaje(){
  console.log("czrrito component")
}
  

  constructor(private messageService:MessageService) { 
    
  }

  ngOnInit(): void {
/*      this.getItemApuesta(); */
console.log("carritocomponent",this.carritoItems )
  }

  getItem():void{
    this.messageService.getMessage()
    .subscribe((resp:ApuestaProductoModel) =>{
      const carItem = new ApuestaVentaModel(resp)
      this.carritoItems.push(carItem)} 
      ) }  

     








}

