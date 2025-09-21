import { Component, signal } from '@angular/core';
import { FunnelStep } from '../funnel-step/funnel-step';
import { CommonModule } from '@angular/common';
import { FunnelStepModel } from '../app.model';

@Component({
  selector: 'customer-filter',
  imports: [FunnelStep, CommonModule],
  templateUrl: './customer-filter.html',
  styleUrl: './customer-filter.css',
})
export class CustomerFilter {
  funnelSteps = signal<FunnelStepModel[]>([{ eventType: 'Unnamed step' }]);

  addStep() {
    this.funnelSteps.update((steps) => [...steps, { eventType: 'Unnamed step' }]);
  }

  removeStep(index: number) {
    this.funnelSteps.update((steps) => steps.filter((_, i) => i !== index));
  }

  applyFilters() {
    console.log('Applying filters:', this.funnelSteps());
  }

  discardFilters() {
    this.funnelSteps.set([{ eventType: 'Unnamed step' }]);
  }
}
