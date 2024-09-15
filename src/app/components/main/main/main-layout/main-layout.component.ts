import { Component } from '@angular/core';
import { HeroNavbarComponent } from '../hero-navbar/hero-navbar.component';
import { AboutFaqehComponent } from '../about-faqeh/about-faqeh.component';
import { DesignSiteBannerComponent } from '../design-site-banner/design-site-banner.component';
import { GallaryComponent } from '../gallary/gallary.component';
import { NotesGallaryBannerComponent } from '../notes-gallary-banner/notes-gallary-banner.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [HeroNavbarComponent, AboutFaqehComponent, DesignSiteBannerComponent,
    GallaryComponent,
  NotesGallaryBannerComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
