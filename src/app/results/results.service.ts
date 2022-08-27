import { Injectable } from '@angular/core';
import { Result, resultsList } from '../utils/resultsList';

@Injectable({
  providedIn: 'root',
})
export class ResultsService {
  resultsList: Result[];

  constructor() {
    this.resultsList = [...resultsList];
  }
}
