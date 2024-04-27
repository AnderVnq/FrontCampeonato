import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../../components/about/about.component';
import { CampeonatoServService } from '../../services/campeonato-serv.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,AboutComponent,RouterLink],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {
  private readonly _CampeonatoService=inject(CampeonatoServService)
  border=2
  
  campeonatos= this._CampeonatoService.get()

}
