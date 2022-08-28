import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { HeaderComponent } from '../header/header.component';
import { AppointmentComponent } from '../appointment/appointment.component';
import { ResultsComponent } from '../results/results.component';
import { ResultsService } from '../results/results.service';
import { NgxHideOnScrollModule } from 'ngx-hide-on-scroll';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    AppointmentComponent,
    ResultsComponent,
  ],
  imports: [CommonModule, NgxHideOnScrollModule],
  providers: [ResultsService],
  exports: [MainComponent],
})
export class MainModule {}
