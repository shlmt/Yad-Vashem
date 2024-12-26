import { Component } from '@angular/core';
import { TimeSlot } from '../../models/TimeSlot.interface';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-times-screen',
  standalone: false,
  
  templateUrl: './times-screen.component.html',
  styleUrl: './times-screen.component.css'
})
export class TimesScreenComponent {
  public timeSlots: TimeSlot[] = []
  public num = 0

  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.timeSlots = this.apiService.getTimeSlots()
  }

  inc=()=>this.num++
  dec=()=>this.num = Math.max(this.num-1,0)
}
