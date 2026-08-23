import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Trip } from '../models/trip';
import { TripDataService } from '../services/trip-data.service';

@Component({
  selector: 'app-edit-trip',
  imports: [NgFor, NgIf, ReactiveFormsModule, RouterLink],
  templateUrl: './edit-trip.html'
})
export class EditTrip implements OnInit {
  private readonly formBuilder = inject(FormBuilder);
  private readonly route = inject(ActivatedRoute);
  private readonly tripDataService = inject(TripDataService);
  private readonly router = inject(Router);
  readonly fields = ['code', 'name', 'length', 'start', 'resort', 'perPerson', 'image', 'description'];
  readonly tripForm = this.formBuilder.nonNullable.group({
    code: ['', Validators.required], name: ['', Validators.required], length: ['', Validators.required],
    start: ['', Validators.required], resort: ['', Validators.required], perPerson: ['', Validators.required],
    image: ['', Validators.required], description: ['', Validators.required]
  });
  error = '';

  ngOnInit(): void {
    const code = this.route.snapshot.paramMap.get('code');
    if (!code) { this.error = 'Trip code is missing.'; return; }
    this.tripDataService.getTrip(code).subscribe({
      next: (trips) => {
        if (trips.length) this.tripForm.patchValue(trips[0]);
        else this.error = 'Trip not found.';
      },
      error: () => this.error = 'Unable to load trip.'
    });
  }

  submit(): void {
    if (this.tripForm.invalid) { this.tripForm.markAllAsTouched(); return; }
    this.tripDataService.updateTrip(this.tripForm.getRawValue() as Trip).subscribe({
      next: () => this.router.navigate(['/']),
      error: (error) => this.error = error.error?.error ?? 'Unable to update trip.'
    });
  }
}