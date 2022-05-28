import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {

  constructor(public stdSer:StudentService ,public router:Router) { }

  stds:Student[]=[];
  ngOnInit(): void {
    this.stdSer.getAllStudents().subscribe(std=>{
      console.log(std);
      this.stds=std;
    })
    console.log(this.stds);
  }
  delete(id:Number){
     this.stdSer.deleteStudent(id).subscribe(s=>console.log(s));
     this.stdSer.getAllStudents().subscribe(std=>{
      console.log(std);
      this.stds=std;})
  }
}
