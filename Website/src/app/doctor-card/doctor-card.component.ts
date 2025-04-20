// doctor-card.component.ts
import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doctor-card',
  templateUrl: './doctor-card.component.html',
  styleUrls: ['./doctor-card.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule
  ]
})
export class DoctorCardComponent {
  @Input() doctor: any;
  @ViewChild('bookingDialog') bookingDialog!: TemplateRef<any>;
  
  bookingForm: FormGroup;
  submitted = false;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog
  ) {
    this.bookingForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      date: ['', Validators.required],
      notes: ['']
    });
  }

  get f() {
    return this.bookingForm.controls;
  }

  openBookingDialog(): void {
    const dialogRef = this.dialog.open(this.bookingDialog, {
      width: '600px',
      maxWidth: '90vw'
    });
  }

  onSubmit(): void {
    this.submitted = true;
    
    if (this.bookingForm.invalid) {
      return;
    }
    
    this.loading = true;
    
    // Here you would typically call your booking service
    console.log('Booking data:', this.bookingForm.value);
    console.log('Doctor:', this.doctor);
    
    // Simulate API call
    setTimeout(() => {
      this.loading = false;
      this.dialog.closeAll();
      // Show success message or navigate to confirmation page
    }, 1500);
  }
}