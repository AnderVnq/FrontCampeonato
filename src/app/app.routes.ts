import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path:'',
        title:'Campeonato-RC',
        component:HomeComponent
    },
    // {
    //     path:'user',
    //     title:'Usuarios',
    //     component:UserComponent
    // },
    {
        path:'login',
        title:'login',
        component:LoginComponent
    }
    
];
