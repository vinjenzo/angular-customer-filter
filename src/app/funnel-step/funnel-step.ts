import { Component } from '@angular/core';
import { Event } from '../event/event';

@Component({
  selector: 'funnel-step',
  imports: [Event],
  templateUrl: './funnel-step.html',
  styleUrl: './funnel-step.css',
})
export class FunnelStep {}
