export type FunnelStepModel = {
  id?: unknown;
  eventType?: string;
  filters?: FunnelFilter[];
};

export type FunnelFilter = {
  attribute: string;
  operator: string;
  value?: string[];
};

export type EventModel = {
  type: string;
  properties: { property: string; type: string }[];
};

export const defaultOperators: Record<string, string[]> = {
  string: ['equals', 'does not equal', 'contains', 'does not contain'],
  number: ['equal to', 'in between', 'less than', 'greater than'],
};
