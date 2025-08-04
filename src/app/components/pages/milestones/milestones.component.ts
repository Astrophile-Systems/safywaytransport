import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-milestones',
  imports: [
    CommonModule
  ],
  templateUrl: './milestones.component.html',
  styleUrls: ['./milestones.component.scss']
})
export class MilestonesComponent {

  milestones = [
    {
      id: 1,
      icon: '🚐',
      title: 'Started with 1 vehicle',
      description: 'Started with just one vehicle, and one clear vision to serve guests of Allah with sincerity.',
      isActive: false
    },
    {
      id: 2,
      icon: '🕌',
      title: 'Served our first 50 pilgrims',
      description: 'Successfully served our first 50 pilgrims from Makkah to Madinah.',
      isActive: false
    },
    {
      id: 3,
      icon: '📍',
      title: 'Expanded to Madinah & Taif',
      description: 'Expanded operations to Madinah, Taif, and Jeddah with 5+ vehicles.',
      isActive: false
    },
    {
      id: 4,
      icon: '👥',
      title: '10,000+ pilgrims served',
      description: 'Reached a major milestone over 10,000 pilgrims served yearly.',
      isActive: true
    },
    {
      id: 5,
      icon: '⭐',
      title: 'Launched VIP Umrah rides',
      description: 'Introduced VIP Umrah Rides, offering luxury, comfort, and ease.',
      isActive: false
    }
  ];

}
