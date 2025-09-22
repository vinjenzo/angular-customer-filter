export type FunnelStepModel = {
  id?: unknown;
  eventType?: string;
  filters?: FunnelFilter[];
};

export type FunnelFilter = {
  attribute: string;
  operator?: string;
  value?: string[];
};

export type EventModel = {
  type: string;
  properties: { property: string; type: string }[];
};
