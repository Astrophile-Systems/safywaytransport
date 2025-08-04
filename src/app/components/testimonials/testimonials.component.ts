import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Testimonial {
  name: string;
  location: string;
  rating: number;
  comment: string;
  image: string;
}
@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      name: 'Ahmed Al-Rashid',
      location: 'Riyadh, Saudi Arabia',
      rating: 5,
      comment: 'Excellent service during our Umrah trip. The driver was very knowledgeable about the routes and helped us reach the Haram on time for all prayers. Highly recommended!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60'
    },
    {
      name: 'Fatima Hassan',
      location: 'Dubai, UAE',
      rating: 5,
      comment: 'Professional and courteous service. The car was clean and comfortable. The driver spoke good English and was very helpful throughout our Hajj journey.',
      image: 'fatima.jpeg'
    },
    {
      name: 'Mohammad Khan',
      location: 'Karachi, Pakistan',
      rating: 5,
      comment: 'Booked their family van for our group of 8. Spacious, clean, and the driver was punctual. Made our Umrah experience much more comfortable. Will use again!',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60'
    },
    {
      name: 'Aisha Ibrahim',
      location: 'Cairo, Egypt',
      rating: 5,
      comment: 'Outstanding service! They were available 24/7 and helped us with transportation between Makkah and Madinah. Very reasonable prices and excellent customer service.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60'
    },
    {
      name: 'Omar Abdullah',
      location: 'London, UK',
      rating: 5,
      comment: 'First time in Saudi Arabia for Hajj, and this service made everything so easy. The driver knew all the best routes and timing for avoiding traffic. Excellent experience!',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60'
    },
    {
      name: 'Zainab Ali',
      location: 'Istanbul, Turkey',
      rating: 5,
      comment: 'Very professional service. The booking process was smooth, and the driver was respectful and knowledgeable. Made our spiritual journey more peaceful and comfortable.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60'
    }
  ];

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}
