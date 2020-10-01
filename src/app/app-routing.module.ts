import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BisiComponent } from "./bisi/bisi.component";

const routes: Routes = [
  {
    path: '',
    component: BisiComponent,
    data: { title: 'Bisi' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
