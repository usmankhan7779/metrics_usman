import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = environment.apiUrl;


  constructor(private http: HttpClient) {

  }
  get_tag(): Observable<any> {
    return this.http.get(this.baseUrl + 'auth/getTag/CUBO-4ddfb88b-6244-4708-9441-663e947f2c93')
      .pipe(
        tap(_ => {
        }, error => {
          console.log(error);
        })
      );
  }
  // /metrics/tableRows/1/0
  get_page(id,page): Observable<any> {
    return this.http.get(this.baseUrl + 'metrics/tableRows/'+id+'/'+page)
      .pipe(
        tap(_ => {
        }, error => {
          console.log(error);
        })
      );
  }
  // get_metrics_view(id): Observable<any> {
  //   return this.http.put(this.baseUrl + 'metrics/metric/'+id)
  //     .pipe(
  //       tap(_ => {
  //       }, error => {
  //         console.log(error);
  //       })
  //     );
  // }

  
  get_metrics_view(id): Observable<any> {
    console.log(id)
    const s = this.http.put(this.baseUrl + 'metrics/metric/'+id,{})
      .pipe(
        tap(_ => {
        }, error => {
          console.log(error)
        })
      );
    return s;
  }

  logout(): Observable<any> {
    return this.http.delete(this.baseUrl + 'auth')
      .pipe(
        tap(_ => {
        }, error => {
          console.log(error);
        })
      );
  }

  // /metrics/metric/11
  get_metrics(): Observable<any> {
    return this.http.get(this.baseUrl + 'metrics')
      .pipe(
        tap(_ => {
        }, error => {
          console.log(error);
        })
      );
  }




  // Sample post
  login(auth): Observable<any> {
    const s = this.http.post(this.baseUrl + 'auth/', auth)
      .pipe(
        tap(_ => {
        }, error => {
          console.log(error)
        })
      );
    return s;
  }

  //
  isLogin(): Observable<any> {
    const s = this.http.get(this.baseUrl + 'auth')
      .pipe(
        tap(_ => {
        }, error => {
          console.log(error)
        })
      );
    return s;
  }
  search(searchvalue): Observable<any> {
    console.log(searchvalue)
    const s = this.http.put(this.baseUrl + 'metrics/searchString', searchvalue)
      .pipe(
        tap(_ => {
        }, error => {
          console.log(error)
        })
      );
    return s;
  }

  setFilter(data): Observable<any> {
    console.log()
    const s = this.http.put(this.baseUrl + 'metrics/filter',data)
      .pipe(
        tap(_ => {
        }, error => {
          console.log(error)
        })
      );
    return s;
  }
  setPeriod(id): Observable<any> {
    console.log()
    const s = this.http.put(this.baseUrl + 'metrics/period/'+id,{})
      .pipe(
        tap(_ => {
        }, error => {
          console.log(error)
        })
      );
    return s;
  }
  setView(id): Observable<any> {
    console.log()
    const s = this.http.put(this.baseUrl + 'metrics/view/'+id,{})
      .pipe(
        tap(_ => {
        }, error => {
          console.log(error)
        })
      );
    return s;
  }

}
