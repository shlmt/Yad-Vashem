import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimesScreenComponent } from './components/times-screen/times-screen.component';
import { TimeSlotComponent } from './components/time-slot/time-slot.component';

@NgModule({
  declarations: [
    AppComponent,
    TimesScreenComponent,
    TimeSlotComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
