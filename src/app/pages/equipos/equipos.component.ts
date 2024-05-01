import { Component, OnInit, inject } from '@angular/core';
import { EquipoServService } from '../../services/equipo-serv.service';
import { EquipoInterface } from '../../interfaces/equipo-interface';
import { JugadorInterface } from '../../interfaces/jugador-interface';

@Component({
  selector: 'app-equipos',
  standalone: true,
  imports: [],
  templateUrl: './equipos.component.html',
  styles: ``
})
export class EquiposComponent implements OnInit {
  private readonly _equipoService=inject(EquipoServService)
  equipo!:EquipoInterface
  jugadores!:JugadorInterface[]



  constructor(){}


  ngOnInit(): void {
    
    this._equipoService.get_jugadores_equipo(1).subscribe({
      next:(response:any)=>{
        console.log(response.equipo)
        this.equipo=response.equipo
        console.log(response.jugadores)
        this.jugadores=response.jugadores
        
      }
    })


  }
}
