import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-our-story',
  imports: [CommonModule],
  templateUrl: './our-story.component.html',
  styleUrl: './our-story.component.scss'
})
export class OurStoryComponent {
founderVision = {
    quote: "We started with one van and a dua — today we serve thousands of Allah's guests every year.",
    highlighted: "Mile"
  };
}
