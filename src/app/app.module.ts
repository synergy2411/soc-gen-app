import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { EmployeeModule } from './employee-module/employee.module';


import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { CountryCodePipe } from './pipes/countrycode.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { LoggerInterceptorService } from './services/logger-interceptor.service';
import { APP_ROUTES } from './app.routing';
import { OverviewComponent } from './product/overview/overview.component';
import { SpecificationComponent } from './product/specification/specification.component';
import { LoginGaurdService } from './services/login-gaurd.service';


@NgModule({
  declarations: [
    AppComponent, 
    UserComponent, 
    ProductComponent,
    HighlightDirective,
    UnlessDirective,
    PipeDemoComponent,
    CountryCodePipe,
    FilterPipe,
    LoginComponent,
    RegisterComponent,
    OverviewComponent,
    SpecificationComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
    EmployeeModule
  ],
  providers: [ UserService, AuthService, LoginGaurdService,
    {
    provide : HTTP_INTERCEPTORS,
    useClass : AuthInterceptorService,
    multi : true
  },{
    provide : HTTP_INTERCEPTORS,
    useClass : LoggerInterceptorService,
    multi : true
  }  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
