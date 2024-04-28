import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
    {
        path:'',
        title:'Campeonato-RC',
        component:HomeComponent
    },
    {
        path:'register',
        title:'Registro',
        component:RegisterComponent
    },
    {
        path:'login',
        title:'login',
        component:LoginComponent
    }
    
];
