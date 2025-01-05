import { Component, OnDestroy, OnInit } from '@angular/core';
import { TimeSlot } from '../../models/TimeSlot.interface';
import { ApiService } from '../../api.service';
import { count, Subscription } from 'rxjs';

@Component({
  selector: 'app-times-screen',
  standalone: false,
  
  templateUrl: './times-screen.component.html',
  styleUrl: './times-screen.component.css'
})
export class TimesScreenComponent implements OnInit, OnDestroy{
  private subscription: Subscription|undefined
  timeSlots: TimeSlot[] = []
  numOfCards = 0
  num = 0
  timeSlice:'morning'|'noon'|'afternoon'|'' = ''
  startTime = 0
  endTime = 24*60

  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.subscription = this.apiService.getTimeSlots().subscribe(data => {
      if(data){
        this.timeSlots = data
        this.numOfCards = data.reduce((sum, item) => sum + (item.availablePlaces || 0), 0)
      }
    })
  }

  ngOnDestroy() {
    if (this.subscription)
      this.subscription.unsubscribe()
  }

  inc=()=>this.num++
  dec=()=>this.num = Math.max(this.num-1,0)

  chooseTime = (time:'morning'|'noon'|'afternoon'|'') => {
    switch(time){
      case 'morning' : {
        this.timeSlice = 'morning'
        this.startTime = this.convertToMinutes("8:00")
        this.endTime = this.convertToMinutes("11:00")
        break
      }
      case 'noon' : {
        this.timeSlice = 'noon'
        this.startTime = this.convertToMinutes("11:00")
        this.endTime = this.convertToMinutes("13:00")
        break
      }
      case 'afternoon' : {
        this.timeSlice = 'afternoon'
        this.startTime = this.convertToMinutes("13:00")
        this.endTime = this.convertToMinutes("16:00")
        break
      }
      default:{
        this.startTime = 0
        this.endTime = 24*60
      }
    }
  }

  convertToMinutes = (time:string) => {
    const [hours, minutes] = time.split(":").map(Number)
    return hours * 60 + minutes
  }
  
}
