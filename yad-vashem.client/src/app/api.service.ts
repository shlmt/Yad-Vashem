import { Injectable } from '@angular/core';
import { TimeSlot } from './models/TimeSlot.interface';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private timeSlots$ = new BehaviorSubject<TimeSlot[]|undefined>(undefined)

    constructor(private http:HttpClient) { }

    getTimeSlots=():Observable<TimeSlot[]|undefined>=>{
        if(!this.timeSlots$.value){
            this.http.get<TimeSlot[]>('/api/timeSlot').subscribe(
            (result) => {
                this.timeSlots$.next(result)
            },
            (error) => {
                console.error(error)
            })
        }
        return this.timeSlots$.asObservable()
    }
}
