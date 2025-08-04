import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
interface Stat {
  number: string;
  label: string;
  icon: string;
}
@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  stats: Stat[] = [
    {
      number: '50,000+',
      label: 'Happy Pilgrims',
      icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-4.5a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>'
    },
    {
      number: '200+',
      label: 'Vehicles in Fleet',
      icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>'
    },
    {
      number: '10+',
      label: 'Years of Experience',
      icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>'
    },
    {
      number: '50+',
      label: 'Countries Served',
      icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'
    }
  ];




  testimonials = [
    {
      text: "From Jeddah airport to my hotel in Makkah, the ride was clean, on time, and super comfortable. Highly recommended!",
      author: "Ahmed R.",
      location: "UK",
    },
    {
      text: "We booked a Ziyarat tour with them. The driver was respectful and knew all the historical places. It made our trip so meaningful.",
      author: "Amina S.",
      location: "Pakistan",
    },
    {
      text: "I changed my pickup time twice and they handled it without any issues. Very professional and friendly staff.",
      author: "Yusuf H.",
      location: "UAE",
    },
    {
      text: "The booking process was easy and transparent. No hidden charges at all. Will definitely book again!",
      author: "Fatima B.",
      location: "Canada",
    },
    {
      text: "Excellent service during our Umrah trip. The driver arrived early and was very polite.",
      author: "Ibrahim M.",
      location: "India",
    },
    {
      text: "Clean vehicles, safe driving, and great communication. Totally stress-free experience!",
      author: "Sara K.",
      location: "USA",
    },
    {
      text: "We were traveling with elders and they were very accommodating. Helped us with luggage and made stops as needed.",
      author: "Khalid A.",
      location: "South Africa",
    },
    {
      text: "Superb customer service! They even gave us tips for local food and shopping spots.",
      author: "Zainab L.",
      location: "Qatar",
    },
    {
      text: "Everything was smooth from start to finish. The best transport service we’ve used in Saudi so far.",
      author: "Mohammad T.",
      location: "Bangladesh",
    }
  ];


  currentIndex = 0;

  // Get the 3 visible testimonial indexes
  get visibleIndexes(): number[] {
    const total = this.testimonials.length;
    return [
      this.currentIndex % total,
      (this.currentIndex + 1) % total,
      (this.currentIndex + 2) % total,
    ];
  }

  nextCard(): void {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prevCard(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }



  /////////////////places /////////////////////

  places = [
    {
      image: '104.png',
      description: 'Major international airport, gateway to Makkah and Madinah.'
    },
    {
      image: '105.png',
      description: 'Home to Masjid al-Nabawi and key Ziyarat locations.'
    },
    {
      image: '106.png',
      description: 'Holy city and center of Hajj – transport to/from Haram, Mina, Arafat, Muzdalifah.'
    },
    {
      image: '107.png',
      description: 'First mosque in Islam – frequent Ziyarat location.'
    },
    {
      image: '108.png',
      description: 'Mosque where the Qibla changed – historical and spiritual relevance.'
    }
  ];
}
