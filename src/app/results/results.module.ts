import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsComponent } from './results.component';
import { ResultsService } from './results.service';

@NgModule({
  declarations: [ResultsComponent],
  imports: [CommonModule],
  providers: [ResultsService],
  exports: [ResultsComponent],
})
export class ResultsModule {}
