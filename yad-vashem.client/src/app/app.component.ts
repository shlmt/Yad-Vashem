import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor() {}

  // getTimeSlots() {
  //   this.http.get<TimeSlot[]>('/api/timeSlot').subscribe(
  //     (result) => {
  //       this.timeSlots = result;
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  // }

  title = 'yad-vashem.client'
}
