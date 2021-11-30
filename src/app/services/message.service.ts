import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { ApuestaProducto } from '../protected/apuestas/interfaces/IApuesta';
import { ApuestaProductoModel, ApuestaUsuarioModel } from '../modelo/apuesta';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  message = new Subject();

  

  constructor() { }

  sendMessage(producto: ApuestaProductoModel):void{
    this.message.next(producto)

  }

  getMessage():Observable<any>{
    return this.message.asObservable();
  }

 

  }

