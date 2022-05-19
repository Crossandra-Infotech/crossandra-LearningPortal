import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroductionComponent } from './html/introduction/introduction.component';

const routes: Routes = [
  { path: "intro" , component: IntroductionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [IntroductionComponent]

