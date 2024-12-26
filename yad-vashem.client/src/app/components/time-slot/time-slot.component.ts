import { Component, Input } from '@angular/core';
import { TimeSlot } from '../../models/TimeSlot.interface';

@Component({
  selector: 'app-time-slot',
  standalone: false,
  templateUrl: './time-slot.component.html',
  styleUrl: './time-slot.component.css'
})
export class TimeSlotComponent {

  @Input('timeSlot') timeSlot?:TimeSlot
  @Input('num') num:number = 0
}
