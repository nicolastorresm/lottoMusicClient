import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { IUsuario } from '../../interfaces/IUsuario.interface';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

fechaNacimientoFormateado: string;


  constructor(private fb:FormBuilder,
    private authService:AuthService,
    private router:Router) { }

  ngOnInit(): void {
  }

  
  usuario : IUsuario = {
    nombre            : '',
    apellidop         : '',
    apellidom         : '',
    fechaNacimiento  : '',
    telefono    : '',
    email          :'',
    password          : ''
   }


  miFormulario: FormGroup = this.fb.group({
    nombre: ['',[Validators.required, Validators.minLength(3)]],
    apellidop:['',[Validators.required, Validators.minLength(3)]],
    apellidom:['',[Validators.required, Validators.minLength(3)]],
    fechaNacimiento:['',[Validators.required, Validators.minLength(3)]],
    telefono:['',[Validators.required, Validators.minLength(3)]],
    email: ['',[Validators.required, Validators.email]],
    password:['',[Validators.required, Validators.minLength(8)]]
  })

  crearNuevoUsuario(){

    this.usuario = this.miFormulario.value
        this.usuario.fechaNacimiento = this.formatearFecha(    this.usuario.fechaNacimiento).toString()
        this.authService.agregarUsuario(this.usuario)    
    .subscribe( video => Swal.fire('Registro exitoso',`Ahora, puedes iniciar sesión`,'success')
  
    )
    this.router.navigateByUrl('/login')

   }



 
 

   formatearFecha(fechaNacimiento:string):string{

    console.log("estamos en formatear fecha, valor recibido ", fechaNacimiento)
    let str:string = fechaNacimiento;
    var separador = str.split('T');
        
        console.log("separador 1",separador[0]);
        console.log("separador 2",separador[1]);

    this.fechaNacimientoFormateado =  separador[0]
    
    console.log("LA SUMA DE ESTOS SEPARADORES ES",this.fechaNacimientoFormateado)
     return this.fechaNacimientoFormateado;
    }
   

 }



 






 