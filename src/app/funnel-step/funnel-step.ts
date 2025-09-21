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

  get selectedEvent(): string {
    return this.stepSignal().eventType || '';
  }

  set selectedEvent(value: string) {
    this.stepSignal.update((s) => ({ ...s, eventType: value }));
  }

  get availableEvents(): string[] {
    return this.eventModel.map((e) => e.type);
  }

  onEventSelected() {
    this.stepSignal.update((step) => ({ ...step, eventType: this.selectedEvent }));
  }
}
