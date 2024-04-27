import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthservService } from '../../services/authserv.service';
import { UserInterface } from '../../interfaces/user-interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {
  user_storage=localStorage.getItem('user')
  usuario: UserInterface = this.user_storage ? JSON.parse(this.user_storage) : null;
  token=localStorage.getItem('token')
  open_menu=false

  constructor(){
    
  }

  view_data(){
    //this.open_menu=true
    console.log(this.usuario)
  }

  view_menu(){
    if(!this.open_menu){
      this.open_menu=true
    }
    else{
      this.open_menu=false
    }
  }



}
