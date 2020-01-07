import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GreetingComponent } from './greeting/greeting.component';
import { DateComponent } from './date/date.component';
import { LocationComponent } from './location/location.component';
import { StartAppComponent } from './start-app/start-app.component';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule
, FormsModule, MatButtonModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, GreetingComponent, StartAppComponent, DateComponent, LocationComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
