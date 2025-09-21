import { Component, signal } from '@angular/core';
import { FilterSteps } from './filter-steps/filter-steps';

@Component({
  selector: 'app-root',
  imports: [FilterSteps],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('customer-filters-app');
}
