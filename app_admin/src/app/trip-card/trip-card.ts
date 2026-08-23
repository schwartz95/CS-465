import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Trip } from '../models/trip';
import { TripDataService } from '../services/trip-data.service';

@Component({
  selector: 'app-trip-card',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './trip-card.html',
  styleUrl: './trip-card.css',
})
export class TripCard {
  private readonly tripDataService = inject(TripDataService);
  @Input({ required: true }) trip!: Trip;
  @Output() tripDeleted = new EventEmitter<string>();

  deleteTrip(): void {
    if (!window.confirm(`Delete ${this.trip.name}?`)) {
      return;
    }

    this.tripDataService.deleteTrip(this.trip.code).subscribe({
      next: () => this.tripDeleted.emit(this.trip.code),
      error: (error) => console.error('Unable to delete trip', error)
    });
  }
}