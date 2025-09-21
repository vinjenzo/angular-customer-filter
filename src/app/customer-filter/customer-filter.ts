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
}
