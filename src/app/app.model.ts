export type FunnelStepModel = {
  id?: unknown;
  eventType?: string;
};

export type EventModel = {
  type: string;
  properties: { property: string; type: string }[];
};
