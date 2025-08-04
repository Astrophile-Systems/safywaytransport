import { Component } from '@angular/core';
import { HeroComponent } from '../../hero/hero.component';
import { ServicesComponent } from '../../services/services.component';
import { FleetComponent } from '../../fleet/fleet.component';
import { WhyChooseUsComponent } from '../../why-choose-us/why-choose-us.component';
import { HajjUmrahFeaturesComponent } from '../../hajj-umrah-features/hajj-umrah-features.component';
import { TestimonialsComponent } from '../../testimonials/testimonials.component';
import { PricingComponent } from '../../pricing/pricing.component';
import { AboutComponent } from '../../about/about.component';
import { FaqComponent } from '../../faq/faq.component';
import { JourneySectionComponent } from '../../journey-section/journey.component';
import { HomeContactUsComponent } from '../../home-contact-us/home-contact-us.component';

@Component({
  selector: 'app-home-page',
  imports: [
    HeroComponent,
    ServicesComponent,
    FleetComponent,
    WhyChooseUsComponent,
    HajjUmrahFeaturesComponent,
    TestimonialsComponent,
    PricingComponent,
    AboutComponent,
    FaqComponent,
    JourneySectionComponent,
    HomeContactUsComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
