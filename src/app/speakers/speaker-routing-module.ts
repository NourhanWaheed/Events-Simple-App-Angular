import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsSpeakerComponent } from './details-speaker/details-speaker.component';
import { ListSpeakersComponent } from './list-speakers/list-speakers.component';
const routes: Routes = [
  {path:"",component:ListSpeakersComponent},
  {path:"details/:id",component:DetailsSpeakerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class speakerRouterModule { }
