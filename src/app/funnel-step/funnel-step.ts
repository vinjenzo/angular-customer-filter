import { Component, Input, signal, WritableSignal } from '@angular/core';
import { EventModel, FunnelFilter, FunnelStepModel } from '../app.model';
import { FormsModule } from '@angular/forms';
import { Attribute } from '../attribute/attribute';
import { Operator } from '../operator/operator';

@Component({
  selector: 'funnel-step',
  imports: [FormsModule, Attribute, Operator],
  templateUrl: './funnel-step.html',
  styleUrl: './funnel-step.css',
})
export class FunnelStep {
  @Input() num: number | undefined;
  @Input() stepSignal: WritableSignal<FunnelStepModel> = signal<FunnelStepModel>({
    filters: [{ attribute: 'Select attribute', operator: '', value: [''] }],
  });
  @Input() eventModel: EventModel[] = [];

  get availableEvents(): string[] {
    return this.eventModel.map((e) => e.type);
  }

  get propertiesForEvent(): string[] {
    const event = this.eventModel.find((e) => e.type === this.stepSignal().eventType);
    return event?.properties.map((p) => p.property) ?? [];
  }

  hasActiveFilters(): boolean {
    const filters = this.stepSignal().filters;
    if (!filters || filters.length === 0) return false;

    return true;
  }

  addFilter() {
    this.stepSignal.update((step) => {
      let filters = Array.isArray(step.filters) ? [...step.filters] : [];

      filters.push({ attribute: '', value: '', operator: '', type: 'string' });

      return {
        ...step,
        filters,
      };
    });
  }

  removeFilter(index: number) {
    this.stepSignal.update((step) => {
      let filters = Array.isArray(step.filters) ? [...step.filters] : [];
      filters.splice(index, 1);

      return {
        ...step,
        filters,
      };
    });
  }

  updateFilter(index: number, key: keyof FunnelFilter, value: string | string[]) {
    this.stepSignal.update((step) => {
      let filters = Array.isArray(step.filters) ? [...step.filters] : [];

      filters[index] = { ...filters[index], [key]: value };

      if (key === 'attribute') {
        const event = this.eventModel.find((e) => e.type === step.eventType);
        const prop = event?.properties.find((p) => p.property === value);
        const type = prop?.type === 'number' ? 'number' : 'string';
        filters[index].type = type;
      }

      return {
        ...step,
        filters,
      };
    });
  }
}
