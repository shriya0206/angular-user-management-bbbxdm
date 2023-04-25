import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'angular2-moment';
import { UserModule } from './user/user.module'

import { ROUTES } from './routes';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule, 
    MomentModule,
    UserModule,
    RouterModule.forRoot(ROUTES, { enableTracing: false })
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
