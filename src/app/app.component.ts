import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { NgOptimizedImage } from '@angular/common';
import { CommentsComponent } from './components/comments/comments.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserComponent,CommentsComponent,NgOptimizedImage,RouterLink,HeaderComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-campeonato';
  username="anderson"

  on_mouse_over(user:string):void{
    console.log(user)
  }

  resive_emit($event:string):void{
    //console.log($event)
    this.username=$event
  }

}
