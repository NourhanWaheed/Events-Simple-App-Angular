import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './_models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  baseurl="http://localhost:8080/students/";

  constructor(public http:HttpClient) { }

  getAllStudents(){
    console.log(this.http.get<Student[]>(this.baseurl));
    return this.http.get<Student[]>(this.baseurl);
  }

  createStudent(std:Student){
    return this.http.post<Student>(this.baseurl,std)
  }

  // updateStudent(std:Student){
  //   return this.http.put<Student>(this.baseurl+std.id,std);
  // }

  deleteStudent(id:Number){
    return this.http.delete(this.baseurl+"?id="+id);
  }
  
  getStudent(id:number){
   return this.http.get<Student>(this.baseurl+id);
  }

  
}
