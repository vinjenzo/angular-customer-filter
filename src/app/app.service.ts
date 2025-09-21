import { Injectable } from '@angular/core';
import { EventModel } from './app.model';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor() {}

  async getEvents(): Promise<EventModel[]> {
    const res = await fetch('https://br-fe-assignment.github.io/customer-events/events.json');
    const data = await res.json();
    return data.events;
  }
}
