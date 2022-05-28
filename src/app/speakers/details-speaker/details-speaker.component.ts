import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SpeakerService } from 'src/app/speaker.service';
import { Speaker } from 'src/app/_models/speaker';

@Component({
  selector: 'app-details-speaker',
  templateUrl: './details-speaker.component.html',
  styleUrls: ['./details-speaker.component.css']
})
export class DetailsSpeakerComponent implements OnInit {

  spk:Speaker=new Speaker("","","","",{city:"",street:"",buildingNumber:""});
  constructor(public activateRoute:ActivatedRoute,public spkSer:SpeakerService ,public router:Router) { }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    this.sub2?.unsubscribe();
  }
  sub:Subscription|null=null;
  sub2:Subscription|null=null;

  ngOnInit(): void {
   this.sub= this.activateRoute.params.subscribe(a=>{
       this.sub2= this.spkSer.getSpeaker(a['id']).subscribe(s=>this.spk=s)
    })
  }
  back(){
    this.router.navigate(['/speakers'])
  }

}
