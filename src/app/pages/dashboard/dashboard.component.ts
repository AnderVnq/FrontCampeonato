import { Component } from '@angular/core';
import {RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule,RouterLink],
  templateUrl: './dashboard.component.html',
  styles: ``
})
export class DashboardComponent {

}
