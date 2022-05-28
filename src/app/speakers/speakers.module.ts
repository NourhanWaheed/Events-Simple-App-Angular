import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSpeakersComponent } from './list-speakers/list-speakers.component';
import { DetailsSpeakerComponent } from './details-speaker/details-speaker.component';
import { EditSpeakerComponent } from './edit-speaker/edit-speaker.component';
import { speakerRouterModule } from './speaker-routing-module'



@NgModule({
  declarations: [
    ListSpeakersComponent,
    DetailsSpeakerComponent,
    EditSpeakerComponent
  ],
  imports: [
    CommonModule,
    speakerRouterModule
  ]
})
export class SpeakersModule { }
