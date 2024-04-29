import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataServService } from '../../services/data-serv.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent {
  login_object:Login
  procesando=false

  constructor(private http:HttpClient) {
    this.login_object= new Login()
  }

  login(){
    this.procesando=true
    this.http.post('http://127.0.0.1:5000/login/',this.login_object).subscribe(
    {
        next:(response:any)=>{
          console.log(response["refresh-token"])
          console.log(response.token)
          console.log(response.message)
          console.log(response.user)
          const user=JSON.stringify(response.user)
          alert("succes")
          console.log(user);
          
          localStorage.setItem('Auth_token',response.token)
          localStorage.setItem('Refresh-token',response["refresh-token"])
          localStorage.setItem('user',user)
          this.procesando=false
          window.location.href='/'
      },
        error:(error)=>{
          console.log(error)
          this.procesando=false
          alert("error")
        },
        complete(){
         console.log("complete")
         
        },
      },
    )
  }
}
      



export class Login{
  username:string
  password:string

  constructor(){
    this.username=''
    this.password=''
  }
}