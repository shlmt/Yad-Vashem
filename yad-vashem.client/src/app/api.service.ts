import { Injectable } from '@angular/core';
import { TimeSlot } from './models/TimeSlot.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private timeSlots:TimeSlot[] = []

    constructor(private http:HttpClient) { 
        this.http.get<TimeSlot[]>('/api/timeSlot').subscribe(
        (result) => {
            this.timeSlots = result
        },
        (error) => {
            console.error(error)
        })
    }

    getTimeSlots=():TimeSlot[]=>{
        return this.timeSlots
    }
}
