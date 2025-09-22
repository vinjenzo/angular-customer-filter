import { Component, Input, signal, WritableSignal } from '@angular/core';
import { EventModel, FunnelStepModel } from '../app.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'funnel-step',
  imports: [FormsModule],
  templateUrl: './funnel-step.html',
  styleUrl: './funnel-step.css',
})
export class FunnelStep {
  @Input() num: number | undefined;
  @Input() stepSignal: WritableSignal<FunnelStepModel> = signal<FunnelStepModel>({});
  @Input() eventModel: EventModel[] = [];

  get availableEvents(): string[] {
    return this.eventModel.map((e) => e.type);
  }
}
