import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  NgxIntlTelInputModule,
  CountryISO,
  PhoneNumberFormat,
  SearchCountryField,
} from 'ngx-intl-tel-input';
import {
  CustomDropdownComponent,
  DropdownOption,
} from '../../custom-dropdown/custom-dropdown.component';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxIntlTelInputModule,
    CustomDropdownComponent,
  ],
})
export class ContactUsComponent {
  contactForm: FormGroup;
  preferredCountries: CountryISO[] = [
    CountryISO.SaudiArabia,
    CountryISO.Pakistan,
    CountryISO.India,
    CountryISO.UnitedStates,
  ];
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  public SearchCountryField = SearchCountryField;

  // Dropdown options
  pickupLocationOptions: DropdownOption[] = [
    { value: 'Jeddah Airport', label: 'Jeddah Airport' },
    { value: 'Makkah Hotel', label: 'Makkah Hotel' },
    { value: 'Madinah Hotel', label: 'Madinah Hotel' },
    { value: 'Madinah Airport', label: 'Madinah Airport' },
    { value: 'Riyadh City', label: 'Riyadh City' },
    { value: 'Riyadh Airport', label: 'Riyadh Airport' },
  ];

  destinationLocationOptions: DropdownOption[] = [
    { value: 'Jeddah Airport', label: 'Jeddah Airport' },
    { value: 'Makkah Hotel', label: 'Makkah Hotel' },
    { value: 'Madinah Hotel', label: 'Madinah Hotel' },
    { value: 'Madinah Airport', label: 'Madinah Airport' },
    { value: 'Riyadh City', label: 'Riyadh City' },
    { value: 'Riyadh Airport', label: 'Riyadh Airport' },
  ];

  vehicleOptions: DropdownOption[] = [
    { value: 'Hyundai Grand Starex', label: 'Hyundai Grand Starex (11 seats)' },
    { value: 'Hyundai Sonata', label: 'Hyundai Sonata (4 seats)' },
    { value: 'Toyota Camry', label: 'Toyota Camry (4 seats)' },
    { value: 'Toyota Coaster', label: 'Toyota Coaster (28 seats)' },
    { value: 'Toyota Hiace', label: 'Toyota Hiace (14 seats)' },
    { value: 'Yutong Bus', label: 'Yutong Bus (50 seats)' },
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      fullName: ['', Validators.required],
      phoneNumber: [undefined, [Validators.required]],
      pickupDate: ['', Validators.required],
      pickupTime: ['', Validators.required],
      passengers: [1, [Validators.required, Validators.min(1)]],
      pickupLocation: ['', Validators.required],
      destinationLocation: ['', Validators.required],
      vehicle: ['', Validators.required],
    });
  }

  onSubmit() {
    this.contactForm.valid;
    // phoneNumber will be an object from ngx-intl-tel-input
    console.log(this.contactForm.value);
    debugger;
  }
}
