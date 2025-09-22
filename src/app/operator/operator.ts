import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'operator',
  templateUrl: './operator.html',
  imports: [FormsModule],
})
export class Operator {
  @Input() operators: string[] = [];
  @Input() selected: string = '';
  @Output() selectedChange = new EventEmitter<string>();

  onChange(value: string) {
    this.selectedChange.emit(value);
  }
}
