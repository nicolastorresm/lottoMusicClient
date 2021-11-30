import { Component, Input, OnInit } from '@angular/core';
import { ApuestaVentaModel } from 'src/app/modelo/apuesta';
import { ApuestaProducto, ApuestaUsuario } from '../../protected/apuestas/interfaces/IApuesta';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApuestaUsuarioModel } from '../../modelo/apuesta';

@Component({
  selector: 'app-carrito-item',
  templateUrl: './carrito-item.component.html',
  styles: [
  ]
})
export class CarritoItemComponent implements OnInit {
 
 
  agregarNuevoApuesta(){
    console.log("CARRITO ITEM COMPONENTE")
  }

  
  

 
 
  
  constructor() { }

  ngOnInit(): void {
    

  
  }

}
