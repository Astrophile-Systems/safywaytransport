import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Service {
  title: string;
  description: string;
  icon: string;
}
@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  servicesOne = [
    {
      icon: 'suitcase.png',
      title: 'Airport Pick & Drop',
      description:
        'On-time pickups and drop-offs from Jeddah or Madinah Airport to your hotel or Haram.',
    },
    {
      icon: 'makah.png',
      title: 'Hajj & Umrah Travel',
      description:
        'Dedicated transport service for all rituals and travel between Makkah, Madinah, Mina, Arafat, and Muzdalifah.',
    },
    {
      icon: 'destination.png',
      title: 'Ziyarat Tours',
      description:
        'Visit historic Islamic sites with knowledgeable drivers who know the routes and spiritual importance.',
    },
  ];

  servicesTwo = [
    {
      icon: 'destination1.png',
      title: 'City-to-City Transfers',
      description:
        'Safe and smooth rides between Makkah, Madinah, Jeddah, Taif, and other key cities.',
    },
    {
      icon: 'service.png',
      title: 'Private Car Rentals',
      description:
        'Rent a car with or without a driver — perfect for families or groups looking for privacy and flexibility.',
    },
    {
      icon: 'groups.png',
      title: 'Group Transport',
      description:
        'Spacious vans and buses for large families and group pilgrims with luggage support.',
    },
  ];


  statistics = [
    {
      number: '2200+',
      label: 'Customer Served',
    },
    {
      number: '1100',
      label: 'Companies Served',
    },
    {
      number: '3+',
      label: 'Years of Experience',
    },
  ];
}
