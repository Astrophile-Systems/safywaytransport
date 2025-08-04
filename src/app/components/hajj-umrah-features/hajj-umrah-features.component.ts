import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Feature {
  title: string;
  description: string;
  icon: string;
}
@Component({
  selector: 'app-hajj-umrah-features',
  imports: [CommonModule],
  templateUrl: './hajj-umrah-features.component.html',
  styleUrl: './hajj-umrah-features.component.scss'
})
export class HajjUmrahFeaturesComponent {
  features: Feature[] = [
    {
      title: 'Haram Shuttle Service',
      description: 'Direct transportation to and from Masjid al-Haram and Masjid an-Nabawi with convenient pickup points.',
      icon: 'transport.png'
    },
    {
      title: 'Flexible Timing',
      description: 'Available for Fajr, Maghrib, and Isha prayers with special arrangements for Tahajjud and Qiyam.',
      icon: 'flexible.png'
    },
    {
      title: 'Group Packages',
      description: 'Special rates for families and groups with customized itineraries for Hajj and Umrah rituals.',
      icon: 'engagement.png'
    },
    {
      title: 'VIP Services',
      description: 'Premium packages with dedicated drivers, priority booking, and luxury vehicle options.',
      icon: 'vip.png'
    }
  ];

}
