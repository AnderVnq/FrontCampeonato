import { Component, inject } from '@angular/core';
import {MatTableModule}    from '@angular/material/table'
import { EquipoServService } from '../../services/equipo-serv.service';
import { EquipoInterface } from '../../interfaces/equipo-interface';
@Component({
  selector: 'app-dash-equipo',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './dash-equipo.component.html',
  styles: ``
})
export class DashEquipoComponent {
  private readonly _equipoService = inject(EquipoServService)
  dataSource!:EquipoInterface[]
  displayedColumns:string[]=['Nombre','Delegado','Foto_Delegado','Logo_Equipo']





  ngOnInit(): void {
    this._equipoService.get().subscribe({
      next:(response)=>{
          this.dataSource=response
          console.log(response)
      },
      error(err:any) {
        
      },
    })
  }
}
