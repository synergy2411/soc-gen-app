import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  intercept(req : HttpRequest<any>, next : HttpHandler): Observable<HttpEvent<any>>{
    console.log("Intercept ", req);
    console.log(req.url);
    const clonedReq = req.clone({
      params : new HttpParams().set("auth", this.authService.getToken())
    })
    return next.handle(clonedReq);
  }
  constructor(private authService : AuthService) { }

}
