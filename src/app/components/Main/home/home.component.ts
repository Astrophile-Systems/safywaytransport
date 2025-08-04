import { Component } from '@angular/core';
import { HeroComponent } from '../../hero/hero.component';
import { ServicesComponent } from '../../services/services.component';
import { WhyChooseUsComponent } from '../../why-choose-us/why-choose-us.component';
import { JourneySectionComponent } from '../../journey-section/journey.component';
import { HajjUmrahFeaturesComponent } from '../../hajj-umrah-features/hajj-umrah-features.component';
import { TestimonialsComponent } from '../../testimonials/testimonials.component';
import { PricingComponent } from '../../pricing/pricing.component';
import { AboutComponent } from '../../about/about.component';
import { FaqComponent } from '../../faq/faq.component';
import { HomeAboutComponent } from '../../home-about/home-about.component';
import { FleetComponent } from '../../fleet/fleet.component';
import { HowItWorksComponent } from '../../how-it-works/how-it-works.component';
import { HomeContactUsComponent } from '../../home-contact-us/home-contact-us.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    ServicesComponent,
    WhyChooseUsComponent,
    JourneySectionComponent,
    HajjUmrahFeaturesComponent,
    TestimonialsComponent,
    PricingComponent,
    AboutComponent,
    FaqComponent,
    HomeAboutComponent,
    FleetComponent,
    HowItWorksComponent,
    HomeContactUsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent { }
