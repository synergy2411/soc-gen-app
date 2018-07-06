import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { ProductComponent } from './product/product.component';
import { OverviewComponent } from './product/overview/overview.component';
import { SpecificationComponent } from './product/specification/specification.component';
import { LoginGaurdService } from './services/login-gaurd.service';
import { EmployeeComponent } from './employee-module/employee/employee.component';

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
    },{
        path : 'product/:id',
        component : ProductComponent,
        canActivate : [LoginGaurdService],
        children : [{
            path : 'overview',
            component : OverviewComponent
        },{
            path : 'spec',
            component : SpecificationComponent
        }]
    },{
        path : 'employee',
        component : EmployeeComponent
    },{
        path : 'lazy',
        loadChildren : 'app/lazy/lazy.module#LazyModule'
    }, {
        path : "**",
        redirectTo : 'login',
        pathMatch : 'full'
    }
]