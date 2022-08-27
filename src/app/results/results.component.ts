import { Component, OnInit } from '@angular/core';
import { Result } from '../utils/resultsList';
import { ResultsService } from './results.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  resultsList: Result[] = [];

  constructor(private resultsService: ResultsService) {}

  ngOnInit(): void {
    this.resultsList = this.resultsService.resultsList;
  }
}
