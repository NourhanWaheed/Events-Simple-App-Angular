import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-details-student',
  templateUrl: './details-student.component.html',
  styleUrls: ['./details-student.component.css']
})
export class DetailsStudentComponent implements OnInit {

  std:Student=new Student(0,"","");
  constructor(public activateRoute:ActivatedRoute,public stdSer:StudentService ,public router:Router) { }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    this.sub2?.unsubscribe();
  }
  sub:Subscription|null=null;
  sub2:Subscription|null=null;

  ngOnInit(): void {
   this.sub= this.activateRoute.params.subscribe(a=>{
       this.sub2= this.stdSer.getStudent(a['id']).subscribe(s=>this.std=s)
    })
  }
  back(){
    this.router.navigate(['/students'])
  }

}
