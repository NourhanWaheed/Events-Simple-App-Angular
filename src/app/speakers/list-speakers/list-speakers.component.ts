import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpeakerService } from 'src/app/speaker.service';
import { Speaker } from 'src/app/_models/speaker';

@Component({
  selector: 'app-list-speakers',
  templateUrl: './list-speakers.component.html',
  styleUrls: ['./list-speakers.component.css']
})
export class ListSpeakersComponent implements OnInit {

  constructor(public spkSer:SpeakerService ,public router:Router) { }

  spks:Speaker[]=[];
  ngOnInit(): void {
    this.spkSer.getAllSpeakers().subscribe(spk=>{
      this.spks=spk;
    })
  }
  delete(id:String){
     this.spkSer.deleteStudent(id).subscribe(s=>console.log(s));
     this.spkSer.getAllSpeakers().subscribe(spk=>{
      this.spks=spk;})
  }

}
