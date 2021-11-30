import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApuestaProductoModel } from '../../modelo/apuesta';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styles: [
  ]
})
export class ModalComponent implements OnInit {

  productoApuesta:ApuestaProductoModel


  constructor(public modal:NgbActiveModal) { }

  ngOnInit(): void {
  }

}
