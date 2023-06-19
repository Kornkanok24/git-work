import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CreateComponent } from './components/create/create.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TrackingpostComponent } from './components/trackingpost/trackingpost.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'create',component:CreateComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'trackingpost',component:TrackingpostComponent},
  {path:'navbar',component:NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
