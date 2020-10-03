import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginSuccessComponent } from './login-success/login-success.component';
import { LoginComponent } from './login/login.component';
import { RegistrationSuccessComponent } from './registration-success/registration-success.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
  {path:'' ,component:LoginComponent},
  {path:'loginsucess' ,component : LoginSuccessComponent},
  {path:'registration' ,component : RegistrationComponent},
  {path: 'login', component:LoginComponent},
  {path: 'registrationsucess', component:RegistrationSuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
