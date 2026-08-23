import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { beforeEach, describe, expect, it } from 'vitest';

import { TripListing } from './trip-listing';
import { TripCard } from '../trip-card/trip-card';
import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trip';

describe('TripListing', () => {
  let component: TripListing;
  let fixture: ComponentFixture<TripListing>;
  const mockTrips: Trip[] = [
    {
      code: 'TEST001', name: 'Test Reef', length: '3 nights / 4 days',
      start: '2026-01-01T08:00:00Z', resort: 'Test Bay, 4 stars',
      perPerson: '999.00', image: 'reef1.jpg', description: 'Test trip one.'
    },
    {
      code: 'TEST002', name: 'Second Reef', length: '5 nights / 6 days',
      start: '2026-02-01T08:00:00Z', resort: 'Second Bay, 5 stars',
      perPerson: '1299.00', image: 'reef2.jpg', description: 'Test trip two.'
    }
  ];
  const tripDataServiceMock = {
    getTrips: () => of(mockTrips)
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripListing],
      providers: [
        { provide: TripDataService, useValue: tripDataServiceMock },
        provideRouter([])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TripListing);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load the mock trips', () => {
    expect(component.trips()).toEqual(mockTrips);
  });

  it('should render exactly two trip cards', () => {
    expect(fixture.nativeElement.querySelectorAll('app-trip-card')).toHaveLength(2);
  });
});
