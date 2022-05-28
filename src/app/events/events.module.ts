import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeventsComponent } from './listevents/listevents.component';
import { ListEventsComponent } from './list-events/list-events.component';
import { AddEventComponent } from './add-event/add-event.component';
import { DetailsEventComponent } from './details-event/details-event.component';
import { DeleteEventComponent } from './delete-event/delete-event.component';



@NgModule({
  declarations: [
    ListeventsComponent,
    ListEventsComponent,
    AddEventComponent,
    DetailsEventComponent,
    DeleteEventComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EventsModule { }
