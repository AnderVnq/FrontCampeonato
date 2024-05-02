import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../../components/about/about.component';
import { CampeonatoServService } from '../../services/campeonato-serv.service';
import { RouterLink } from '@angular/router';
import { CampeonatoInterface } from '../../interfaces/campeonatos-interface';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,AboutComponent,RouterLink],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {
  private readonly _CampeonatoService=inject(CampeonatoServService)
  border=3
  loading=false
  campeonatos!:CampeonatoInterface[]


  constructor(){this.get_campeonatos()}

  get_campeonatos(){

    console.log(this.loading)
    this._CampeonatoService.get().subscribe(
      {
        next:(response)=>{
          console.log(response)
          this.campeonatos=response
          
        },
        error:(error)=>{
          console.log(error)
        },
        complete:()=>{
          console.log("complete");
          
        },
      }
    )


    this.loading=true

  }

}
