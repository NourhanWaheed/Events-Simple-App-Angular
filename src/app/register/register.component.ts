import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 valueType:string = "admin";
 userName:string = "";
 password:string = "";
  constructor(public userser:RegisterService ,public router:Router) { }

  ngOnInit(): void {
  }
  onItemChange(event:any){
    this.valueType = event.value;
    console.log(event.value);
 }
 submit(){
  this.userser.getLogined(this.userName,this.password,this.valueType).subscribe(a=>{
    localStorage.setItem('token',a.toString());
    localStorage.setItem('role',this.valueType);
  });
  this.router.navigate(['/students'])
 }
}
