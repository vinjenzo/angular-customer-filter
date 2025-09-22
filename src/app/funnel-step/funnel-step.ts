import { Component, Input, signal, WritableSignal } from '@angular/core';
import { defaultOperators, EventModel, FunnelFilter, FunnelStepModel } from '../app.model';
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
  selectedProperty: string = '';

  get availableEvents(): string[] {
    return this.eventModel.map((e) => e.type);
  }

  get propertiesForEvent(): string[] {
    const event = this.eventModel.find((e) => e.type === this.stepSignal().eventType);
    return event?.properties.map((p) => p.property) ?? [];
  }

  addFilter() {
    this.stepSignal.update((step) => {
      let filters = Array.isArray(step.filters) ? [...step.filters] : [];

      filters.push({ attribute: '', value: [''], operator: '' });

      return {
        ...step,
        filters,
      };
    });
  }

  updateFilter(index: number, key: keyof FunnelFilter, value: string) {
    this.selectedProperty = value;

    this.stepSignal.update((step) => {
      let filters = Array.isArray(step.filters) ? [...step.filters] : [];

      while (filters.length <= index) {
        filters.push({ attribute: '', operator: '', value: [''] });
      }
      filters[index] = { ...filters[index], [key]: value };

      return {
        ...step,
        filters,
      };
    });
  }

  getOperatorsForAttribute(attr: string): string[] {
    const event = this.eventModel.find((e) => e.type === this.stepSignal().eventType);
    const prop = event?.properties.find((p) => p.property === attr);
    return defaultOperators[prop?.type ?? 'string'];
  }
}
