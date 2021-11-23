import { Injectable } from '@angular/core';
import { Usuario } from '../../modelo/usuario';
import { IUsuario } from '../interfaces/IUsuario.interface';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


 // atributos para metodo guardar usuario y token
 private _usuario: Usuario;
 private _token: string;

 private iUsuario: IUsuario


  private baseUrl: string = environment.baseUrl



  constructor(private _http : HttpClient) { }

  public get usuario():Usuario{
    if (this._usuario != null){
      return this._usuario
    }else if (this._usuario == null && sessionStorage.getItem('usuario') != null ){
      //convertir el uysario del sesion staorage en un objeti
    this._usuario =  JSON.parse(sessionStorage.getItem('usuario')) as Usuario
    return this._usuario
    }
    return new Usuario();
  }

  public get token():string{
    if (this._token != null){
      return this._token
    }else if (this._token == null && sessionStorage.getItem('token') != null ){

    this._token =  sessionStorage.getItem('token')
    return this._token
    }
    return null
  }


  login(usuario: Usuario):Observable<any>{
    const urlEndpoint = `${this.baseUrl}/login`
    //const credenciales =btoa ('angularapp'+ ':'+'12345')
    const httpHeaders = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'}); //+creden
    let params = new URLSearchParams();
  //params.set('grant_type','password')
    params.set('username', usuario.email)
    params.set('password', usuario.password)
    console.log(params.toString())

    return this._http.post<any>(urlEndpoint,params.toString(),{headers: httpHeaders})
    
 
  }

  loginUsuario (email: string, password:string){
    const urlEndpoint = `${this.baseUrl}/login`
  }



  guardarUsuario(accessToken: string ):void{
    let payload = this.obtenerDatosToken(accessToken)
    this._usuario = new Usuario();
    this._usuario.email = payload.sub;
    sessionStorage.setItem('usuario',JSON.stringify(this._usuario)) //pase convierte string a JSON, stringify convierte un objeto a string o texto
  }

  guardarToken(accessToken: string ):void{

    this._token = accessToken
    sessionStorage.setItem('token',accessToken);

  }

  obtenerDatosToken(accessToken:string):any{
    if (accessToken != null){
      return JSON.parse(atob(accessToken.split(".")[1]));
    }
    return null;

  }
//verificar si el usuario ya ha iniciado sesion
  isAuthenticated():boolean{
    let payload = this.obtenerDatosToken(this.token);// desde el metodo tojen get
    if (payload != null && payload.sub && payload.sub.length>0){
      return true
    }
    return false;
  }

  logout():void{
    this._usuario= null;
    this._token = null
    sessionStorage.clear();

    sessionStorage.removeItem('usuario')
    sessionStorage.removeItem('token')
  }

  resetPassword(email: string): void{
try {
  console.log(email)
} catch (error) {
  console.log(error)
}
  }

//AGREGAR USUARIO





agregarUsuario (usuario:IUsuario ){
  console.log("estamos en service: agregarUsuario")
  console.log("Recibimos ", usuario)
  
  console.log(usuario)
      return this._http.post<IUsuario>(`${this.baseUrl}/usuarios`,usuario)
}



}
