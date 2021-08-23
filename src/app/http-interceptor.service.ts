import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private auth: AuthService) { }

  intercept(request: HttpRequest<any>,next:HttpHandler): Observable<HttpEvent<any>>{
    let token = this.auth.curruserdata();
    if(token !== ''){
    request = request.clone({
      setHeaders: {
        Authorization: `Basic ${token}`
      }
    });
  }
    return next.handle(request);

  }
}
