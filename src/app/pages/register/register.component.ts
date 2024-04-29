import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInput} from '@angular/material/input'
import { AuthservService } from '../../services/authserv.service';
import { CommonModule } from '@angular/common';
import { MatSnackBar,MatSnackBarConfig } from '@angular/material/snack-bar';
import { UserInterface } from '../../interfaces/user-interface';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,RouterLink,ReactiveFormsModule,MatFormFieldModule,MatInput,CommonModule],
  templateUrl: './register.component.html',
  styles:
  `
  `
})
export class RegisterComponent {
  private readonly _authservice=inject(AuthservService)
  private readonly _builder = inject(FormBuilder)
  private snack_config = new MatSnackBarConfig()
  usuario!:UserInterface
  // formGroup= new FormGroup({
  //   username: new FormControl('',Validators.required),
  //   email:new FormControl('',Validators.required),
  //   password: new FormControl('',Validators.required),
  //   confirm_password:new FormControl('',Validators.required),
  //   nombre: new FormControl('',Validators.required),
  //   apellido: new FormControl('',Validators.required),
  // })
  constructor(private _snackBar: MatSnackBar,private router:Router){
  }


  formGroup=this._builder.nonNullable.group(
    {
      username: ['',Validators.required],
      email:['',[Validators.email,Validators.required]],
      password: ['',Validators.required],
      nombre:['',Validators.required],
      apellido:['',Validators.required],
    }
  )


  register_click(){
    const email=this.formGroup.controls.email.value
    if(this.formGroup.valid){
      this.snack_config.duration=2000
      this.snack_config.panelClass=["panel-succes"]
      console.log(email)
      const valores=this.formGroup.value
      this.usuario = {
        username:this.formGroup.controls.username.value,
        password:this.formGroup.controls.password.value,        
        first_name:this.formGroup.controls.nombre.value,
        last_name:this.formGroup.controls.apellido.value,
        email:this.formGroup.controls.email.value
      }
      
      this._authservice.user_register(this.usuario)
      console.log(valores);
      console.log(this.usuario)
      setTimeout(() => {
        this.router.navigate(['/'])
      },1000);
    }
    else{
      this.snack_config.duration=2000
      this.snack_config.panelClass=["panel-error"]
      this._snackBar.open("Error En Registro",'',this.snack_config)
    }

  }

}
