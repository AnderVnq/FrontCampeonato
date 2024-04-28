import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthservService } from '../../services/authserv.service';
import { UserInterface } from '../../interfaces/user-interface';
import { CommonModule } from '@angular/common';
import { DataServService } from '../../services/data-serv.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {
  private readonly _authserv = inject(AuthservService)
  usuario!:UserInterface
  
  open_menu=false

  constructor(private _dataservice:DataServService){
    this.usuario = this._dataservice.getItemsFromLocalStorage()
    if(this.usuario)this.usuario.img='https://github.com/AnderVnq.png'
    console.log(this.usuario)
  }

  view_data(){
    //this.open_menu=true
    console.log(this.usuario)
  }

  logout(){
    return this._authserv.logout()
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
