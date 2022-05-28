import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import {StudentsModule} from './students/students.module';
import { RegisterComponent } from './register/register.component';
import { SignupComponent } from './signup/signup.component'
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    StudentsModule,
    HttpClientModule,
    FormsModule,
  ],
  exports:[
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
