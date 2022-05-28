import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsStudentComponent } from './details-student/details-student.component';
import { ListStudentsComponent } from './list-students/list-students.component';

const routes: Routes = [
  {path:"",component:ListStudentsComponent},
  {path:"details/:id",component:DetailsStudentComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class studentRouterModule { }
