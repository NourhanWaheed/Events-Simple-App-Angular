import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"signup",component:SignupComponent},
  {path:"students",loadChildren:()=>import('./students/students.module').then(m=>m.StudentsModule)},
  {path:"speakers",loadChildren:()=>import('./speakers/speakers.module').then(m=>m.SpeakersModule)},
  {path:"",component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
