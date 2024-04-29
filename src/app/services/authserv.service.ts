import { Injectable, inject } from '@angular/core';
import { UserInterface } from '../interfaces/user-interface';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class AuthservService {
  private readonly _http=inject(HttpClient)
  private snack_config = new MatSnackBarConfig()
  isLogin=false
  usuario:UserInterface|null=null
  usuarios:UserInterface[]=[]

  constructor(private _snackBar: MatSnackBar){}


  logout(){
    localStorage.clear()
    window.location.href='/'
  }

  get(){
    return [...this.usuarios]
  }

  user_register(user:UserInterface){
    this._http.post('http://127.0.0.1:5000/users/',user).subscribe({
      next:(response:any)=>{
        console.log(response)
        this.snack_config.duration=2000
        this.snack_config.panelClass=["panel-succes"]
        console.log(response);
        this._snackBar.open(response.message,'',this.snack_config)
      },
      error:(error)=>{
        console.log(error)
        console.log(error.error.errors.non_field_errors[0])
        this.snack_config.duration=2000
        this.snack_config.panelClass=["panel-error"]
        this._snackBar.open(error.error.errors.non_field_errors[0],'',this.snack_config)
      },
      complete:()=>{
        console.log("asdasdasd")
      }
    })
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