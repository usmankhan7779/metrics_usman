import {Component, OnInit} from '@angular/core';
import {HttpService} from 'src/app/services/http.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: any = {};

  constructor(private http: HttpService, private _nav: Router, private toastr: ToastrService) {
  }

  ngOnInit() {
    const tag = localStorage.getItem('clienttag') || '';
    if (tag === '') {
      this.Get_Tag();
    } else {
      this.http.isLogin().subscribe(res => {
        console.log(res);
        if (res.logged === false) {
          this._nav.navigate(['login'])
        } else {
          this._nav.navigate(['metrics'])

        }
      })
    }
  }

  Get_Tag() {

    this.http.get_tag().subscribe(
      data => {
        console.log(data);
        localStorage.setItem('clienttag', data.tag)

      });
  }

  onLogin() {
    let auth = {
      username: this.model.username,
      password: this.model.password
    };
    this.http.login(auth).subscribe(
      data => {
        localStorage.setItem('role', 'true');

        this.toastr.success(data['response']);
        this._nav.navigate(['/metrics'])


      },
      error => {


        this.toastr.warning('please enter correct username and password ');


      }
    );

  }
}
