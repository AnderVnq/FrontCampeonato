import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { Component, ViewChild, inject } from '@angular/core';
import { JugadorServService } from '../../services/jugador-serv.service';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort'
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { JugadorInterface } from '../../interfaces/jugador-interface';

@Component({
  selector: 'app-dash-jugadores',
  standalone: true,
  imports: [MatTableModule,MatIconModule,RouterLink,MatLabel ,MatFormField,MatSortModule],
  templateUrl: './dash-jugadores.component.html',
  styles: ``
})
export class DashJugadoresComponent {
  private readonly _jugadorServices=inject(JugadorServService)
  dataSource=new MatTableDataSource
  displayedColumns=['id','nombre','apellido_paterno','apellido_materno','equipo','imagen_dni','posicion_jugador','fecha_nacimiento']


  constructor(private _liveAnnouncer: LiveAnnouncer){}

  gelou(e:any){

  }

  @ViewChild(MatSort) sort: MatSort | undefined;

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort ? this.sort : null;
  }
  
  
  ngOnInit(): void {
    this._jugadorServices.get().subscribe({
      next:(response:any)=>{
        console.log(response);
        this.dataSource=response 
        
      }
    })

    this._jugadorServices.getbyID(1).subscribe({
      next:(response:JugadorInterface) =>{
        console.log(response)
      },
    })


  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
