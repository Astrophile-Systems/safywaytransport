import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-core-values',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './core-values.component.html',
  styleUrls: ['./core-values.component.scss']
})
export class CoreValuesComponent {
  
  coreValues = [
    {
      id: 1,
      icon: '🤲',
      title: 'Respect',
      description: 'We treat every pilgrim with dignity and honor, recognizing the spiritual significance of their journey. Our team upholds a culture of kindness and courteous behavior at all times.'
    },
    {
      id: 2,
      icon: '🕌',
      title: 'Faith-Centered Service',
      description: 'Our services are rooted in Islamic values, ensuring every step aligns with faith and devotion. We serve with sincerity, viewing this duty as a sacred trust.'
    },
    {
      id: 3,
      icon: '🤝',
      title: 'Trust & Honesty',
      description: 'Transparency and truthfulness are at the heart of everything we do. We build long-lasting relationships through reliable and ethical service.'
    }
  ];
}
