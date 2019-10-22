import {Injectable} from '@angular/core';
import {tap} from 'rxjs/operators';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HttpInterceptors implements HttpInterceptor {
  constructor() {
  }

  // function which will be called for all http calls
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // how to update the request Parameters
    let updatedRequest: any;

    if (!(request.url.endsWith('auth/getTag/CUBO-4ddfb88b-6244-4708-9441-663e947f2c93'))) {
      let token = localStorage.getItem('clienttag');
      console.log(token, 'Client Tag');
      updatedRequest = request.clone({
        // headers: request.headers.set('Content-Type', 'application/json');

        setHeaders: {

          ClientTag: `${token}`,


        }

      });
    } else {
      updatedRequest = request.clone({
        // headers: request.headers.set('Content-Type', 'application/json');

        setHeaders: {
          'Content-Type': 'application/json',
        }

      });
    }

    return next.handle(updatedRequest).pipe(
      tap(
        event => {
          // logging the http response to browser's console in case of a success
          if (event instanceof HttpResponse) {
            console.log('api call success :', event);
          }
        },
        error => {
          // logging the http response to browser's console in case of a failuer
          if (event instanceof HttpResponse) {
            console.log('api call error :', event);
          }
        }
      )
    );

  }
}
