import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Injectable()
export class LoggerInterceptorService implements HttpInterceptor {

  intercept(req : HttpRequest<any>, next : HttpHandler): Observable<HttpEvent<any>>{
    console.log("Logger Interceptor!");
    return next.handle(req)
      .do(response=>{
        console.log("Response : ", response);
        return response;
      });
  }

  constructor() { }

}
