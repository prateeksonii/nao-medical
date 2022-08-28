import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BottomNavbarComponent } from './bottom-navbar/bottom-navbar.component';
import { MainModule } from './main/main.module';

@NgModule({
  declarations: [AppComponent, NavbarComponent, BottomNavbarComponent],
  imports: [BrowserModule, MainModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
