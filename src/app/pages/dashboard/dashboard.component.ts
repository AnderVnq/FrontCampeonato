import { Component } from '@angular/core';
import {RouterLink, RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon'
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule,RouterLink,MatIconModule],
  templateUrl: './dashboard.component.html',
  styles: ``
})
export class DashboardComponent {

}
