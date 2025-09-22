import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { defaultOperators } from '../app.model';

@Component({
  selector: 'operator',
  templateUrl: './operator.html',
  imports: [FormsModule],
})
export class Operator {
  @Input() type: 'string' | 'number' = 'string';
  @Input() selected: string = '';
  @Output() selectedChange = new EventEmitter<string>();

  get operators(): string[] {
    return defaultOperators[this.type] ?? [];
  }

  onChange(value: string) {
    this.selectedChange.emit(value);
  }
}
