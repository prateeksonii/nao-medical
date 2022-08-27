import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ResultsModule } from './results/results.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    AppointmentComponent,
  ],
  imports: [BrowserModule, ResultsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
