import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface FAQ {
  question: string;
  answer: string;
}
@Component({
  selector: 'app-faq',
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
openIndex: number | null = null;

  faqs: FAQ[] = [
    {
      question: 'How far in advance should I book my car rental?',
      answer: 'We recommend booking at least 2-3 weeks in advance, especially during Hajj season. However, we also accommodate last-minute bookings based on availability.'
    },
    {
      question: 'Are your drivers familiar with Hajj and Umrah routes?',
      answer: 'Yes, all our drivers are experienced professionals who are well-versed with the routes between hotels, Haram, and other important locations in Makkah and Madinah.'
    },
    {
      question: 'Do you provide airport pickup and drop-off services?',
      answer: 'Yes, we provide complimentary airport pickup and drop-off services for all our rental packages. Our drivers will be waiting for you with a name sign.'
    },
    {
      question: 'What is included in the rental price?',
      answer: 'Our rental prices include the vehicle, professional driver, fuel, basic insurance, and airport transfers. Additional services like extra stops or extended hours may incur additional charges.'
    },
    {
      question: 'Can I modify or cancel my booking?',
      answer: 'Yes, you can modify or cancel your booking up to 48 hours before your scheduled pickup time without any charges. Cancellations within 48 hours may incur a small fee.'
    },
    {
      question: 'Do you provide child seats and wheelchair accessibility?',
      answer: 'Yes, we provide child seats upon request at no extra charge. We also have wheelchair-accessible vehicles available for passengers with mobility needs.'
    },
    {
      question: 'What languages do your drivers speak?',
      answer: 'Our drivers primarily speak Arabic and English. We also have drivers who speak Urdu, Turkish, and other languages based on availability and advance request.'
    },
    {
      question: 'Is there 24/7 customer support available?',
      answer: 'Yes, we provide 24/7 customer support during Hajj and Umrah seasons. During regular times, our support is available from 6 AM to 12 AM Saudi time.'
    }
  ];

  toggleFAQ(index: number): void {
    this.openIndex = this.openIndex === index ? null : index;
  }
}
