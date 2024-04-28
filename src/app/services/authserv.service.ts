import { Injectable } from '@angular/core';
import { UserInterface } from '../interfaces/user-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthservService {

  isLogin=false
  usuario:UserInterface|null=null
  usuarios:UserInterface[]=[]


  logout(){
    localStorage.clear()
    window.location.href='/'
  }

  get(){
    return [...this.usuarios]
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