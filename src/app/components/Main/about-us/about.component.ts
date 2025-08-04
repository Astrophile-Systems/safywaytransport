import { Component } from '@angular/core';
import { HeroComponent } from '../../hero/hero.component';
import { ServicesComponent } from '../../services/services.component';
import { FleetComponent } from '../../fleet/fleet.component';
import { WhyChooseUsComponent } from '../../why-choose-us/why-choose-us.component';
import { JourneySectionComponent } from '../../journey-section/journey.component';
import { HajjUmrahFeaturesComponent } from '../../hajj-umrah-features/hajj-umrah-features.component';
import { TestimonialsComponent } from '../../testimonials/testimonials.component';
import { PricingComponent } from '../../pricing/pricing.component';
import { AboutComponent } from '../../about/about.component';
import { FaqComponent } from '../../faq/faq.component';
import { HomeAboutComponent } from '../../home-about/home-about.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    ServicesComponent,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class MainAboutComponent {}
