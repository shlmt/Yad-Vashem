import { Injectable } from '@angular/core';
import { TimeSlot } from './models/TimeSlot.interface';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

private mockData = [{"startTime":"8:30","availablePlaces": 0, "isClosed":false},
    {"startTime":"8:40","availablePlaces": 10, "isClosed":false},
    {"startTime":"8:50","availablePlaces": 0, "isClosed":false},
    {"startTime":"9:00","availablePlaces": 10, "isClosed":false},
    {"startTime":"9:10","availablePlaces":60, "isClosed":false},
    {"startTime":"9:20","availablePlaces": 10, "isClosed":true},
    {"startTime":"9:30","availablePlaces": 10, "isClosed":false},
    {"startTime":"9:40","availablePlaces":80, "isClosed":false},
    {"startTime":"9:50","availablePlaces": 10, "isClosed":false},
    {"startTime":"10:00","availablePlaces": 10, "isClosed":false},
    {"startTime":"10:10","availablePlaces": 70, "isClosed":false},
    {"startTime":"10:20","availablePlaces": 10, "isClosed":false},
    {"startTime":"10:30","availablePlaces": 10, "isClosed":true},
    {"startTime":"10:40","availablePlaces": 0, "isClosed":false},
    {"startTime":"10:50","availablePlaces": 10, "isClosed":false},
    {"startTime":"11:00","availablePlaces": 10, "isClosed":false},
    {"startTime":"11:10","availablePlaces": 10, "isClosed":false},
    {"startTime":"11:20","availablePlaces": 0, "isClosed":false},
    {"startTime":"11:30","availablePlaces": 10, "isClosed":false},
    {"startTime":"11:40","availablePlaces": 10, "isClosed":true},
    {"startTime":"11:50","availablePlaces": 10, "isClosed":false},
    {"startTime":"12:00","availablePlaces": 10, "isClosed":false},
    {"startTime":"12:10","availablePlaces": 0, "isClosed":false},
    {"startTime":"12:20","availablePlaces": 10, "isClosed":false},
    {"startTime":"12:30","availablePlaces": 10, "isClosed":false},
    {"startTime":"12:40","availablePlaces":50, "isClosed":false},
    {"startTime":"12:50","availablePlaces": 10, "isClosed":false},
    {"startTime":"13:00","availablePlaces": 80, "isClosed":false},
    {"startTime":"13:10","availablePlaces": 10, "isClosed":false}, 
    {"startTime":"13:20","availablePlaces": 70, "isClosed":true}, 
    {"startTime":"13:30","availablePlaces": 10, "isClosed":true},
    {"startTime":"13:40","availablePlaces": 0, "isClosed":false},
    {"startTime":"13:50","availablePlaces": 10, "isClosed":false},
    {"startTime":"14:00","availablePlaces": 10, "isClosed":false},
    {"startTime":"14:10","availablePlaces": 10, "isClosed":false},
    {"startTime":"14:20","availablePlaces": 0, "isClosed":false},
    {"startTime":"14:30","availablePlaces": 10, "isClosed":false},
    {"startTime":"14:40","availablePlaces": 0, "isClosed":false},
    {"startTime":"14:50","availablePlaces": 10, "isClosed":false},
    {"startTime":"15:00","availablePlaces": 70, "isClosed":false},
    {"startTime":"15:10","availablePlaces": 10, "isClosed":false},
    {"startTime":"15:20","availablePlaces": 70, "isClosed":false},
    {"startTime":"15:30","availablePlaces": 10, "isClosed":false},
    {"startTime":"15:40","availablePlaces":80, "isClosed":false},
    {"startTime":"15:50","availablePlaces": 30, "isClosed":false}]

    constructor() { }

    getTimeSlots = ():TimeSlot[] =>{
        return this.mockData
    }
}
