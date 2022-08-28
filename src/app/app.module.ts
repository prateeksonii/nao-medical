import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BottomNavbarComponent } from './bottom-navbar/bottom-navbar.component';
import { MainModule } from './main/main.module';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './base/base.component';

const routes: Routes = [{ path: '', component: BaseComponent }];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BottomNavbarComponent,
    BaseComponent,
  ],
  imports: [BrowserModule, MainModule, RouterModule.forRoot(routes)],
  bootstrap: [AppComponent],
})
export class AppModule {}
