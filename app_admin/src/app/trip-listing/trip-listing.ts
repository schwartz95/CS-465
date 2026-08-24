import { Component, OnInit, inject, signal } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { TripCard } from '../trip-card/trip-card';
import { Trip } from '../models/trip';
import { TripDataService } from '../services/trip-data.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
    selector: 'app-trip-listing',
    imports: [NgFor, NgIf, TripCard],
    templateUrl: './trip-listing.html',
    styleUrl: './trip-listing.css'
})
export class TripListing implements OnInit {
    private readonly tripDataService = inject(TripDataService);
    private readonly router = inject(Router);
    trips = signal<Trip[]>([]);

    private readonly authenticationService =
  inject(AuthenticationService);

isLoggedIn(): boolean {
  return this.authenticationService.isLoggedIn();
}

    addTrip(): void {
        this.router.navigate(['/add-trip']);
    }

    ngOnInit(): void {
        this.loadTrips();
    }

    loadTrips(): void {
        this.tripDataService.getTrips().subscribe({
            next: (trips) => this.trips.set(trips),
            error: (error) => console.error('Unable to load trips', error)
        });
    }
}