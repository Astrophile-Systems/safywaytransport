import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isMobileMenuOpen = false;

  navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Fleet', href: '#fleet' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  constructor(
    public themeService: ThemeService,
    private _utilsService: UtilsService
  ) { }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  navigateToAboutUs(): void {
    this._utilsService.navigateTo('/about-us');
  }

  navigateToFleet(): void {
    this._utilsService.navigateTo('/our-fleets');
  }
  navigateToContactUs(): void {
    this._utilsService.navigateTo('/contact-us');
  }

  navigateToServices(): void {
    this._utilsService.navigateTo('/Services');
  }



}
