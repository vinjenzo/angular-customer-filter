import { Component, Input, signal } from '@angular/core';
import { Event } from '../event/event';
import { FunnelStepModel } from '../app.model';

@Component({
  selector: 'funnel-step',
  imports: [Event],
  templateUrl: './funnel-step.html',
  styleUrl: './funnel-step.css',
})
export class FunnelStep {
  @Input() set step(value: FunnelStepModel) {
    this.stepSignal.set(value);
  }

  stepSignal = signal<FunnelStepModel>({ eventType: '' });
}
