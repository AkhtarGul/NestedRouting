import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { FirstRoutingModule } from './first-routing.module';
import { FirstComponent } from './first.component';

@NgModule({
  imports: [BrowserModule, FormsModule, FirstRoutingModule],
  declarations: [FirstComponent],
  bootstrap: [FirstComponent]
})
export class FirstModule {}
