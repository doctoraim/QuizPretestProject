import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloQ1Component } from './hello-q1/hello-q1.component';
import { HelloQ2Component } from './hello-q2/hello-q2.component';

const routes: Routes = [
  { path: 'q1', component: HelloQ1Component },
  { path: 'q2', component: HelloQ2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
