import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListStudentsComponent } from './list-students/list-students.component';
import { DetailsStudentComponent } from './details-student/details-student.component';
import { studentRouterModule} from './student-routing-module'



@NgModule({
  declarations: [
    ListStudentsComponent,
    DetailsStudentComponent,
  ],
  imports: [
    CommonModule,
    studentRouterModule
  ],
  exports:[
    ListStudentsComponent,
    DetailsStudentComponent,
  ]
})
export class StudentsModule { }
