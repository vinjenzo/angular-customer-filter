import { Component, inject, signal, WritableSignal } from '@angular/core';
import { FunnelStep } from '../funnel-step/funnel-step';
import { CommonModule } from '@angular/common';
import { EventModel, FunnelStepModel } from '../app.model';
import { AppService } from '../app.service';

@Component({
  selector: 'customer-filter',
  imports: [FunnelStep, CommonModule],
  templateUrl: './customer-filter.html',
  styleUrl: './customer-filter.css',
})
export class CustomerFilter {
  funnelSteps = signal<WritableSignal<FunnelStepModel>[]>([
    signal({ eventType: 'Unnamed step', id: crypto.randomUUID() }),
  ]);
  eventModel = signal<EventModel[]>([]);

  private eventService = inject(AppService);

  async ngOnInit() {
    const events = await this.eventService.getEvents();
    this.eventModel.set(events);
  }

  addStep() {
    this.funnelSteps.update((steps) => [
      ...steps,
      signal<FunnelStepModel>({ eventType: 'Unnamed step', id: crypto.randomUUID() }),
    ]);
  }

  cloneStep(index: number) {
    const stepToClone = this.funnelSteps()[index]();
    this.funnelSteps.update((steps) => [
      ...steps,
      signal<FunnelStepModel>({
        ...stepToClone,
        eventType: stepToClone.eventType,
        id: crypto.randomUUID(),
      }),
    ]);
  }

  removeStep(index: number) {
    this.funnelSteps.update((steps) => steps.filter((_, i) => i !== index));
  }

  applyFilters() {
    console.log(
      'Applying filters:',
      this.funnelSteps().map((step) => step())
    );
  }

  discardFilters() {
    this.funnelSteps.set([
      signal<FunnelStepModel>({ eventType: 'Unnamed step', id: crypto.randomUUID() }),
    ]);
  }
}
