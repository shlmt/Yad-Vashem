import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TimeSlot } from './models/timeSlot.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  public timeSlots: TimeSlot[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getTimeSlots();
  }

  getTimeSlots() {
    this.http.get<TimeSlot[]>('/api/timeSlot').subscribe(
      (result) => {
        this.timeSlots = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  title = 'yad-vashem.client';
}
