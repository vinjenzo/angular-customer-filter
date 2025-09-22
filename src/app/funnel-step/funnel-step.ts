import { Component, Input, signal, WritableSignal } from '@angular/core';
import { EventModel, FunnelFilter, FunnelStepModel } from '../app.model';
import { FormsModule } from '@angular/forms';
import { Attribute } from '../attribute/attribute';

@Component({
  selector: 'funnel-step',
  imports: [FormsModule, Attribute],
  templateUrl: './funnel-step.html',
  styleUrl: './funnel-step.css',
})
export class FunnelStep {
  @Input() num: number | undefined;
  @Input() stepSignal: WritableSignal<FunnelStepModel> = signal<FunnelStepModel>({
    filters: [{ attribute: 'Select attribute' }],
  });
  @Input() eventModel: EventModel[] = [];
  selectedProperty: string = '';

  get availableEvents(): string[] {
    return this.eventModel.map((e) => e.type);
  }

  get propertiesForEvent(): string[] {
    const event = this.eventModel.find((e) => e.type === this.stepSignal().eventType);
    return event?.properties.map((p) => p.property) ?? [];
  }

  addFilter() {
    console.log('Adding filter');

    this.stepSignal.update((step) => {
      let filters = Array.isArray(step.filters) ? [...step.filters] : [];

      filters.push({ attribute: '', value: [''] });

      return {
        ...step,
        filters,
      };
    });
  }

  updateFilter(index: number, key: keyof FunnelFilter, value: string) {
    this.selectedProperty = value;

    console.log('Updating filter:', index, key, value);

    this.stepSignal.update((step) => {
      let filters = Array.isArray(step.filters) ? [...step.filters] : [];

      while (filters.length <= index) {
        filters.push({ attribute: '', value: [''] });
      }
      filters[index] = { ...filters[index], [key]: value };

      return {
        ...step,
        filters,
      };
    });
  }
}
