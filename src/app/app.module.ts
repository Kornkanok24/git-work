import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CreateComponent } from './components/create/create.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TrackingpostComponent } from './components/trackingpost/trackingpost.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

import {SocialAuthServiceConfig,SocialAuthService, SocialLoginModule} from '@abacritt/angularx-social-login';
import {FacebookLoginProvider} from '@abacritt/angularx-social-login'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateComponent,
    DashboardComponent,
    TrackingpostComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    SocialLoginModule
  ],
  providers: [
    {
    provide:'SocialAuthServiceConfig',
    useValue:{
      autoLogin:false,
      providers:[{
        id:FacebookLoginProvider.PROVIDER_ID,
        provider:new FacebookLoginProvider("208776414951176")
        } 
      ],
      onError:(err) =>{
        console.error(err);
      },
    } as SocialAuthServiceConfig,
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
