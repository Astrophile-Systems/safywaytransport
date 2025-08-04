import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Reason {
  title: string;
  description: string;
  icon: string;
}
@Component({
  selector: 'app-why-choose-us',
  imports: [CommonModule],
  templateUrl: './why-choose-us.component.html',
  styleUrl: './why-choose-us.component.scss'
})
export class WhyChooseUsComponent {
  reasons: Reason[] = [
    {
      title: '10+ Years Experience',
      description: 'Serving Hajj and Umrah pilgrims with dedication and expertise since 2014.',
      icon: 'quality.png' // Example path
    },
    {
      title: '99% Customer Satisfaction',
      description: 'Thousands of satisfied customers who trust us for their sacred journey.',
      icon: 'groups.png'
    },
    {
      title: 'Punctual Service',
      description: 'Always on time, ensuring you never miss your important appointments.',
      icon: 'destination.png'
    },
    {
      title: 'Licensed & Insured',
      description: 'Fully licensed by Saudi authorities with comprehensive insurance coverage.',
      icon: 'service.png'
    }
  ];

}
