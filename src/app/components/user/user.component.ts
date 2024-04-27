import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserInterface } from '../../interfaces/user-interface';
import { AuthservService } from '../../services/authserv.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user.component.html',
  styles: ``
})
export class UserComponent {
  private readonly _authService=inject(AuthservService)
  email=''
  username=''
  usuarios=this._authService.get()

}
