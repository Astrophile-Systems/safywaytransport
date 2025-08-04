import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-what-drives-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './what-drives-us.component.html',
  styleUrls: ['./what-drives-us.component.scss']
})
export class WhatDrivesUsComponent {
  
  mission = {
    title: 'Mission',
    description: 'To provide safe, punctual, and respectful transport to all pilgrims visiting the holy cities of Makkah, Madinah, and beyond.'
  };

  vision = {
    title: 'Vision',
    description: 'To be the most trusted and spiritually aligned transport service for Hajj and Umrah pilgrims across Saudi Arabia.'
  };
}
