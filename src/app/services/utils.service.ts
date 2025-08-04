import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    private router: Router,
    private location: Location
  ) { }

  /**
   * Navigate to a route with optional query parameters
   * @param route - The route to navigate to (e.g., '/home', '/services')
   * @param queryParams - Optional query parameters object
   * @param fragment - Optional fragment/hash (e.g., 'section1')
   * @param preserveQueryParams - Whether to preserve existing query params (default: false)
   * @param replaceUrl - Whether to replace current URL in history (default: false)
   */
  navigateTo(
    route: string, 
    queryParams?: { [key: string]: any }, 
    options?: {
      fragment?: string;
      preserveQueryParams?: boolean;
      replaceUrl?: boolean;
      relativeTo?: any;
    }
  ): Promise<boolean> {
    const navigationExtras: any = {};

    // Add query parameters if provided
    if (queryParams) {
      navigationExtras.queryParams = queryParams;
    }

    // Handle query params preservation
    if (options?.preserveQueryParams) {
      navigationExtras.queryParamsHandling = 'merge';
    }

    // Add fragment if provided
    if (options?.fragment) {
      navigationExtras.fragment = options.fragment;
    }

    // Replace URL in history if specified
    if (options?.replaceUrl) {
      navigationExtras.replaceUrl = true;
    }

    // Relative navigation
    if (options?.relativeTo) {
      navigationExtras.relativeTo = options.relativeTo;
    }

    return this.router.navigate([route], navigationExtras);
  }

  /**
   * Go back in browser history
   */
  goBack(): void {
    this.location.back();
  }

  /**
   * Go forward in browser history
   */
  goForward(): void {
    this.location.forward();
  }

  /**
   * Get current route
   */
  getCurrentRoute(): string {
    return this.router.url;
  }

  /**
   * Check if current route matches given route
   * @param route - Route to check against
   */
  isCurrentRoute(route: string): boolean {
    return this.router.url === route;
  }

  /**
   * Navigate to route and scroll to element
   * @param route - Route to navigate to
   * @param elementId - ID of element to scroll to
   * @param queryParams - Optional query parameters
   */
  navigateAndScrollTo(
    route: string, 
    elementId: string, 
    queryParams?: { [key: string]: any }
  ): Promise<boolean> {
    return this.navigateTo(route, queryParams, { fragment: elementId });
  }
}
