import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Trip } from '../models/trip';
import { TripDataService } from '../services/trip-data.service';

@Component({
  selector: 'app-add-trip',
  imports: [NgFor, NgIf, ReactiveFormsModule, RouterLink],
  templateUrl: './add-trip.html'
})
export class AddTrip {
  private readonly formBuilder = inject(FormBuilder);
  private readonly tripDataService = inject(TripDataService);
  private readonly router = inject(Router);
  readonly fields = ['code', 'name', 'length', 'start', 'resort', 'perPerson', 'image', 'description'];
  readonly tripForm = this.formBuilder.nonNullable.group({
    code: ['', Validators.required], name: ['', Validators.required],
    length: ['', Validators.required], start: ['', Validators.required],
    resort: ['', Validators.required], perPerson: ['', Validators.required],
    image: ['', Validators.required], description: ['', Validators.required]
  });
  error = '';

  submit(): void {
    if (this.tripForm.invalid) { this.tripForm.markAllAsTouched(); return; }
    this.tripDataService.addTrip(this.tripForm.getRawValue() as Trip).subscribe({
      next: () => this.router.navigate(['/']),
      error: (error) => this.error = error.error?.error ?? 'Unable to add trip.'
    });
  }
}