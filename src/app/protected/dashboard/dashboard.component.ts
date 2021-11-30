import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public authService:AuthService,private router:Router) { 
    
  }

  logout(): void {
    let email = this.authService.usuario.email;
    this.authService.logout();
    Swal.fire('Logout', `Hola ${email}, has cerrado sesión con éxito!`, 'success');
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
  }

}
