import { Component, Input, OnInit } from '@angular/core';
import { ApuestaProducto } from '../../protected/apuestas/interfaces/IApuesta';


@Component({
  selector: 'app-producto-item',
  templateUrl: './producto-item.component.html',
  styles: [
  ]
})
export class ProductoItemComponent implements OnInit {
@Input() productoApuesta:ApuestaProducto
  
  constructor() { }

  ngOnInit(): void {
  }

}
