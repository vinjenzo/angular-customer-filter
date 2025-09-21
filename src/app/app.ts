import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerFilter } from './customer-filter/customer-filter';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CustomerFilter],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('customer-filters-app');
}
