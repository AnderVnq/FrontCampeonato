import { Component, OnInit, inject } from '@angular/core';
import { EquipoServService } from '../../services/equipo-serv.service';
import { EquipoInterface } from '../../interfaces/equipo-interface';
import { JugadorInterface } from '../../interfaces/jugador-interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-equipos',
  standalone: true,
  imports: [],
  templateUrl: './equipos.component.html',
  styles: ``
})
export class EquiposComponent implements OnInit {
  private readonly _equipoService=inject(EquipoServService)
  id_equipo!:number
  equipo!:EquipoInterface
  jugadores!:JugadorInterface[]



  constructor(private route:ActivatedRoute){}


  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.id_equipo=params['id']
    })


    this._equipoService.get_jugadores_equipo(this.id_equipo).subscribe({
      next:(response:any)=>{
        console.log(response.equipo)
        this.equipo=response.equipo
        console.log(response.jugadores)
        this.jugadores=response.jugadores
        
      }
    })


  }
}
