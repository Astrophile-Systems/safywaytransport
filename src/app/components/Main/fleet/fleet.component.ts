import { Component } from '@angular/core';
import { HeroComponent } from '../../hero/hero.component';
import { AllFleetsComponent } from '../../all-fleets/all-fleets.component';
import { MessageComponent } from '../../message/message.component';
import { AboutSectionComponent } from '../../about-section/about-section.component';

@Component({
  selector: 'app-main-fleet',
  imports: [HeroComponent, AllFleetsComponent, MessageComponent],
  templateUrl: './fleet.component.html',
  styleUrl: './fleet.component.scss',
})
export class MainFleetComponent {}
