import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { MetricsComponent } from './components/metrics/metrics.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {HttpInterceptors} from './services/_intercepters/http.interceptors';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';
import { AuthGuard } from './services/auth.guard';

@NgModule({
  declarations: [
    
    AppComponent,
    LoginComponent,
    MetricsComponent
  ],
  imports: [
   
    BrowserModule,
      BrowserAnimationsModule,

    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    ToastrModule.forRoot(),
    ToastContainerModule,
    ReactiveFormsModule,
  ],
  providers: [  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptors,
    multi: true
  },
  AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
