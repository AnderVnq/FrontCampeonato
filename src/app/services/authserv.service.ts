import { Injectable } from '@angular/core';
import { UserInterface } from '../interfaces/user-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthservService {

  isLogin=false
  usuario:UserInterface|null=null
  usuarios:UserInterface[]=
  [
    {id:1,username:'anderson',password:'heaveny2',email:'ndrsnvenegas@gmail.com'},
    {id:2,username:'gael',password:'heaveny2',email:'ndrsnvenegas@gmail.com'},
    {id:3,username:'mathias',password:'heaveny2',email:'ndrsnvenegas@gmail.com'}
  ]


  get(){
    return [...this.usuarios]
  }
  


  // create_user(data:any){
  //   const current_user=this.usuarios.find(u=>u.username==data[0] && u.password==data[1])
  //   if(current_user){
  //     this.usuario=current_user
  //     this.isLogin=true
  //   }
  // }
  constructor() { }
}
