import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BisiComponent } from "./bisi/bisi.component";
import { InstructorsComponent } from './instructors/instructors.component';

const routes: Routes = [
  {
    path: '',
    component: BisiComponent,
    data: { title: 'Bisi' }
  },
  {
    path: 'instructors',
    component: InstructorsComponent,
    data: { title: 'Instructores' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
