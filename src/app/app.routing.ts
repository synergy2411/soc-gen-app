import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';

export const APP_ROUTES : Routes = [
    {
        path : '',
        redirectTo : 'login',       
        pathMatch : 'full'
    },{
        path : "login",
        component : LoginComponent
    },{
        path : 'register',
        component : RegisterComponent
    }, {
        path : 'pipe',
        component : PipeDemoComponent
    }, {
        path : "**",
        redirectTo : 'login',
        pathMatch : 'full'
    }
]