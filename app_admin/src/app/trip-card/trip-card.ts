import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Trip } from '../models/trip';
import { TripDataService } from '../services/trip-data.service';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-trip-card',
  imports: [CommonModule, CurrencyPipe, RouterLink],
  templateUrl: './trip-card.html',
  styleUrl: './trip-card.css',
})
export class TripCard {
  private readonly tripDataService = inject(TripDataService);
  private readonly authenticationService =
  inject(AuthenticationService);

public isLoggedIn(): boolean {
  return this.authenticationService.isLoggedIn();
}
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