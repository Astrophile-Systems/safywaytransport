import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Package {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}
@Component({
  selector: 'app-pricing',
  imports: [CommonModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent {
packages: Package[] = [
    {
      name: 'Economy Package',
      price: 'SAR 150',
      period: '/day',
      description: 'Perfect for budget-conscious pilgrims',
      features: [
        'Toyota Camry or similar',
        'Professional driver',
        'Air conditioning',
        'Basic insurance',
        'Fuel included',
        'Airport pickup/drop'
      ],
      popular: false
    },
    {
      name: 'Family Package',
      price: 'SAR 250',
      period: '/day',
      description: 'Ideal for families and small groups',
      features: [
        'Toyota Hiace (8 passengers)',
        'Experienced driver',
        'Premium air conditioning',
        'Comprehensive insurance',
        'Fuel included',
        'Airport pickup/drop',
        'Extra luggage space',
        'Child seats available'
      ],
      popular: true
    },
    {
      name: 'VIP Package',
      price: 'SAR 400',
      period: '/day',
      description: 'Luxury experience for discerning pilgrims',
      features: [
        'Mercedes E-Class or BMW 5 Series',
        'Premium professional driver',
        'Climate control',
        'Full insurance coverage',
        'Fuel included',
        'Priority airport service',
        'Leather interior',
        'Complimentary water',
        '24/7 concierge support'
      ],
      popular: false
    }
  ];
}
