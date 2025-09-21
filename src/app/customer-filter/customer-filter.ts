import { Component } from '@angular/core';
import { FunnelStep } from '../funnel-step/funnel-step';

@Component({
  selector: 'customer-filter',
  imports: [FunnelStep],
  templateUrl: './customer-filter.html',
  styleUrl: './customer-filter.css',
})
export class CustomerFilter {}
