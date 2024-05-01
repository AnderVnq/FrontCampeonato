import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CampeonatoServService } from '../../services/campeonato-serv.service';
import { CampeonatoInterface } from '../../interfaces/campeonatos-interface';
import { EquipoInterface } from '../../interfaces/equipo-interface';

@Component({
  selector: 'app-campeonato',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './campeonato.component.html',
  styles: ``
})
export class CampeonatoComponent implements OnInit {
  private readonly _campeonatoService=inject(CampeonatoServService)
  id_campeonato!:string
  campeonato!:CampeonatoInterface
  equipos!:EquipoInterface[]
  campeon=true




  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      this.id_campeonato=params['id']
    })
    
    
    this._campeonatoService.get_participantes_campeonato(parseInt(this.id_campeonato)).subscribe(
      {
        next:(response:any)=>{
          this.campeonato=response.campeonato
          this.equipos=response.equipos
          console.log(this.campeonato)
          console.log(this.equipos)
        },
        error:(err)=> {
          console.log(err)
        },
        complete:() =>{
          console.log("data traida");
        },
      }
    )

    console.log(this.id_campeonato)
  }
}
