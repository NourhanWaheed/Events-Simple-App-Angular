import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Speaker } from './_models/speaker';

@Injectable({
  providedIn: 'root'
})
export class SpeakerService {
  baseurl="http://localhost:8080/speakers/";

  constructor(public http:HttpClient) { }

  getAllSpeakers(){
    console.log(this.http.get<Speaker[]>(this.baseurl));
    return this.http.get<Speaker[]>(this.baseurl);
  }

  // createStudent(std:Student){
  //   return this.http.post<Student>(this.baseurl,std)
  // }

  // updateStudent(std:Student){
  //   return this.http.put<Student>(this.baseurl+std.id,std);
  // }

  deleteStudent(id:String){
    return this.http.delete(this.baseurl+"?id="+id);
  }
  
  getSpeaker(id:String){
   return this.http.get<Speaker>(this.baseurl+id);
  }

  
}
