import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'attribute',
  imports: [FormsModule],
  templateUrl: './attribute.html',
  styleUrl: './attribute.css',
})
export class Attribute {
  @Input() attributes: string[] = [];
  @Input() selected: string = '';
  @Output() selectedChange = new EventEmitter<string>();

  onChange(value: string) {
    this.selectedChange.emit(value);
  }
}
