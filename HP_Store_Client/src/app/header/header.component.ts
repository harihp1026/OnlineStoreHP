import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  lastScrollTop = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > this.lastScrollTop) {
        // Scrolling down
        navbar.style.top = '-60px'; // Adjust this value based on your navbar height
      } else {
        // Scrolling up
        navbar.style.top = '0';
      }

      this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
    }
  }
}
