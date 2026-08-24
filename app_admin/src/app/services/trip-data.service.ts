import { Inject, Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from '../models/trip';
import { User } from '../models/user';
import { AuthResponse } from '../models/auth-response';
import { BROWSER_STORAGE } from '../storage';

@Injectable({ providedIn: 'root' })
export class TripDataService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://127.0.0.1:3000/api/trips';

  constructor(
    @Inject(BROWSER_STORAGE) private storage: Storage
  ) {}

  login(user: User, passwd: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      'http://127.0.0.1:3000/api/login',
      {
        email: user.email,
        password: passwd
      }
    );
  }

  register(user: User, passwd: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      'http://127.0.0.1:3000/api/register',
      {
        name: user.name,
        email: user.email,
        password: passwd
      }
    );
  }

  private getAuthHeaders() {
    return {
      Authorization: `Bearer ${this.storage.getItem('travlr-token')}`
    };
  }

  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.apiUrl);
  }

  getTrip(code: string): Observable<Trip[]> {
    return this.http.get<Trip[]>(`${this.apiUrl}/${code}`);
  }

  addTrip(trip: Trip): Observable<Trip> {
    return this.http.post<Trip>(this.apiUrl, trip, {
      headers: this.getAuthHeaders()
    });
  }

  updateTrip(trip: Trip): Observable<Trip> {
    return this.http.put<Trip>(
      `${this.apiUrl}/${trip.code}`,
      trip,
      { headers: this.getAuthHeaders() }
    );
  }

  deleteTrip(code: string): Observable<void> {
    return this.http.delete<void>(
      `${this.apiUrl}/${code}`,
      { headers: this.getAuthHeaders() }
    );
  }
}