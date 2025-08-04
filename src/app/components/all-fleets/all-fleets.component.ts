import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-all-fleets',
  imports: [NgFor],
  templateUrl: './all-fleets.component.html',
  styleUrl: './all-fleets.component.scss',
})
export class AllFleetsComponent {
  vehicles = [
    {
      category: 'Premium SUV',
      name: 'Cadillac Escalade ESV',
      image: 'assets/images/escalade.png', // Replace with correct path
      passengers: 6,
      suitcases: 6,
    },
    {
      category: 'Executive SUV',
      name: 'Mercedes GLS',
      image: 'assets/images/gls.png',
      passengers: 6,
      suitcases: 6,
    },
    {
      category: 'Premium Sedan',
      name: 'Cadillac CTS or Similar',
      image: 'assets/images/cts.png',
      passengers: '1–3',
      suitcases: 2,
    },
  ];
}
