import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApuestaVenta } from '../../protected/apuestas/interfaces/IApuesta';

@Component({
  selector: 'app-lista-apuesta-item',
  templateUrl: './lista-apuesta-item.component.html',
  styles: [
  ]
})
export class ListaApuestaItemComponent implements OnInit {

  constructor() { }

 @Input()
 apuesta: ApuestaVenta

  ngOnInit(): void {
    console.log("desde lista apuesta item",this.apuesta)
  }
  



}
