// src/app/core/services/booking.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BookingService {
  private selectedBus$ = new BehaviorSubject<any>(null);
  private selectedSeats$ = new BehaviorSubject<number[]>([]);
  selectedBus = this.selectedBus$.asObservable();
  selectedSeats = this.selectedSeats$.asObservable();

  setBus(bus: any) { this.selectedBus$.next(bus); }
  setSeats(seats: number[]) { this.selectedSeats$.next(seats); }

  clear() { this.selectedBus$.next(null); this.selectedSeats$.next([]); }
}
