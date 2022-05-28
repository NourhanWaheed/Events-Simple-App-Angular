import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  baseurl="http://localhost:8080/login";
  constructor(public http:HttpClient) { }

  getLogined(userName:String,password:String,valueType:String){
    let user={
      userName:userName,
      password:password,
      role:valueType
    }
    return this.http.post(this.baseurl,user);
  }
}
