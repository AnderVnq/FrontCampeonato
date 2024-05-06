
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { EquipoInterface } from '../../interfaces/equipo-interface';
import { EquipoServService } from '../../services/equipo-serv.service';

@Component({
  selector: 'app-dash-equipo',
  standalone: true,
  imports: [MatTableModule,MatIconModule,RouterLink,MatLabel ,MatFormField,FormsModule],
  templateUrl: './dash-equipo.component.html',
  styles: ``
})
export class DashEquipoComponent {
  private readonly _equipoService = inject(EquipoServService)
  dataSource!:EquipoInterface[]
  displayedColumns:string[]=['id','Nombre','Delegado','Foto_Delegado','Logo_Equipo']



  gelou(a:any){
    console.log("asd")
  }

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
