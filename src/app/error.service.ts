import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ErrorService implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>>{
    return next.handle(request).pipe(catchError(err => {
      if(err.status === 401){

      }
      const error = err.error.message || err.statusText;
    return throwError(error);
    }));

  }
}
