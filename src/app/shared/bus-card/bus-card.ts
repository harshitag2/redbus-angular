// src/app/shared/bus-card/bus-card.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bus-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bus-card.html',
  styleUrls: ['./bus-card.scss']
})
export class BusCardComponent {
  @Input() bus: any;
  @Output() view = new EventEmitter<any>();

  onView() {
    this.view.emit(this.bus);
  }
}
