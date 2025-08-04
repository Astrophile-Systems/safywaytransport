import { Component } from '@angular/core';
import { OurStoryComponent } from '../our-story/our-story.component';
import { BannerComponent } from '../banner/banner.component';
import { MilestonesComponent } from '../milestones/milestones.component';
import { WhatDrivesUsComponent } from '../what-drives-us/what-drives-us.component';
import { CoreValuesComponent } from '../core-values/core-values.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    BannerComponent,
    OurStoryComponent,
    MilestonesComponent,
    WhatDrivesUsComponent,
    CoreValuesComponent
  ],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {

}
