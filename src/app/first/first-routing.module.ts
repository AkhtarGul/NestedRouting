import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first.component';
import { ChildAComponent } from './child-a/childA.component';
import { ChildBComponent } from './child-b/childB.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'first-comp',
    component: FirstComponent, // this is the component with the <router-outlet> in the template
    children: [
      {
        path: 'child-a', // child route path
        component: ChildAComponent // child route component that the router renders
      },
      {
        path: 'child-b',
        component: ChildBComponent // another child route component that the router renders
      }
    ]
  }
];
@NgModule({
  imports: [
      BrowserModule,
      RouterModule.forRoot(routes),
      FormsModule               
  ],
  exports: [RouterModule],
  declarations: []
})
export class FirstRoutingModule {}
