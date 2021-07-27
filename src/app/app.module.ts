import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RoutingAppRoutingModule } from './routing-app.module';
import { FirstRoutingModule } from './first/first-routing.module';
import { FirstModule } from './first/first.module';

@NgModule({
  imports: [BrowserModule, FormsModule, RoutingAppRoutingModule,FirstModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
