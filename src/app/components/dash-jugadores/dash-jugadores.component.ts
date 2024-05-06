import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { JugadorServService } from '../../services/jugador-serv.service';


@Component({
  selector: 'app-dash-jugadores',
  standalone: true,
  imports: [MatTableModule,MatIconModule,RouterLink,MatLabel ,MatFormField,FormsModule],
  templateUrl: './dash-jugadores.component.html',
  styles: ``
})
export class DashJugadoresComponent {
  private readonly _jugadorServices=inject(JugadorServService)
  dataSource!:any





  ngOnInit(): void {
    this._jugadorServices.get().subscribe({
      next:(response:any)=>{
        console.log(response);
        
      }
    })
  }
}
