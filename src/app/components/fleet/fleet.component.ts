import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
interface Vehicle {
  name: string;
  category: string;
  passengers: number;
  features: string[];
  price: string;
  image: string;
}
@Component({
  selector: 'app-fleet',
  imports: [CommonModule],
  templateUrl: './fleet.component.html',
  styleUrl: './fleet.component.scss',
})
export class FleetComponent {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLElement>;
  constructor(private router: Router) { }
  vehicles = [
    {
      category: 'Premium SUV',
      name: 'Cadillac Escalade ESV',
      image: '1.avif', // Replace with correct path
      passengers: 6,
      suitcases: 6,
    },
    {
      category: 'Executive SUV',
      name: 'Mercedes GLS',
      image: '2.jpeg',
      passengers: 6,
      suitcases: 6,
    },
    {
      category: 'Premium Sedan',
      name: 'Cadillac CTS or Similar',
      image: '3.jpeg',
      passengers: '1–3',
      suitcases: 2,
    },
    {
      category: 'Executive SUV',
      name: 'Mercedes G-63',
      image: '5.webp',
      passengers: 6,
      suitcases: 6,
    },
    {
      category: 'Premium Sedan',
      name: 'Cadillac CTS or Similar',
      image: '2.jpeg',
      passengers: '1–3',
      suitcases: 2,
    },
    {
      category: 'Executive SUV',
      name: 'Mercedes GLS',
      image: '2.jpeg',
      passengers: 6,
      suitcases: 6,
    },
    {
      category: 'Premium Sedan',
      name: 'Cadillac CTS or Similar',
      image: '2.jpeg',
      passengers: '1–3',
      suitcases: 2,
    },
    {
      category: 'Executive SUV',
      name: 'Mercedes GLS',
      image: '2.jpeg',
      passengers: 6,
      suitcases: 6,
    },
    {
      category: 'Premium Sedan',
      name: 'Cadillac CTS or Similar',
      image: '2.jpeg',
      passengers: '1–3',
      suitcases: 2,
    },
  ];

  scrollLeft(): void {
    if (this.scrollContainer) {
      this.scrollContainer.nativeElement.scrollBy({
        left: -320,
        behavior: 'smooth',
      }); // Adjust scroll amount as needed
    }
  }

  scrollRight(): void {
    if (this.scrollContainer) {
      this.scrollContainer.nativeElement.scrollBy({
        left: 320,
        behavior: 'smooth',
      }); // Adjust scroll amount as needed
    }
  }
  navigateToAllFleets() {
    // Navigate to the 'All Fleets' route
    this.router.navigate(['/our-fleets']); // Replace '/all-fleets' with your actual route pat
  }
}
