import { Component } from '@angular/core';

@Component({
  selector: 'app-message',
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
})
export class MessageComponent {
  title =
    'PASSENGER <span class="text-yellow-500">SAFETY</span> IS OUR PRIORITY';
  message =
    'We always have clean vehicles and we are taking extra steps to make sure that all interior surfaces are being thoroughly cleaned with proper sanitization. All our drivers wear masks and each car has hand sanitizer.';
}
