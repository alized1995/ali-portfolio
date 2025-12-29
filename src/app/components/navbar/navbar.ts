import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
 scrolled = false;
  mobileMenuOpen = false;

  // Scroll detection for navbar shrink
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 50;
  }

  // Mobile menu toggle
  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    if (this.mobileMenuOpen) {
      document.body.style.overflow = 'hidden'; // Disable scroll
    } else {
      document.body.style.overflow = 'auto';   // Enable scroll
    }
  }

  // Smooth scroll
  scrollToSection(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.mobileMenuOpen = false;
    document.body.style.overflow = 'auto'; // Ensure scroll enabled after click
  }
}
