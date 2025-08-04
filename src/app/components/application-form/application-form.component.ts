import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-application-form',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './application-form.component.html',
  styleUrl: './application-form.component.scss'
})
export class ApplicationFormComponent {
applicationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.applicationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      nationality: ['', Validators.required],
      journeyType: ['', Validators.required],
      vehicleType: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      passengers: ['', [Validators.required, Validators.min(1)]],
      requirements: ['']
    });
  }

  onSubmit(): void {
    if (this.applicationForm.valid) {
      console.log('Form submitted:', this.applicationForm.value);
      // Here you would typically send the data to your backend
      alert('Application submitted successfully! We will contact you within 24 hours.');
      this.applicationForm.reset();
    }
  }
}
