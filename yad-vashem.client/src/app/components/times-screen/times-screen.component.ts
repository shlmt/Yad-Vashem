import { Component, OnDestroy, OnInit } from '@angular/core';
import { TimeSlot } from '../../models/TimeSlot.interface';
import { ApiService } from '../../api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-times-screen',
  standalone: false,
  
  templateUrl: './times-screen.component.html',
  styleUrl: './times-screen.component.css'
})
export class TimesScreenComponent implements OnInit, OnDestroy{
  private subscription: Subscription|undefined
  public timeSlots: TimeSlot[] = []
  public num = 0

  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.subscription = this.apiService.getTimeSlots().subscribe(data => {
      if(data) this.timeSlots = data
    })
  }

  ngOnDestroy() {
    if (this.subscription)
      this.subscription.unsubscribe()
  }

  inc=()=>this.num++
  dec=()=>this.num = Math.max(this.num-1,0)
}
