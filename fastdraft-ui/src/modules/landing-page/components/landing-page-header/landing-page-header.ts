import { Component, computed, input, output } from '@angular/core';

@Component({
  selector: 'app-landing-page-header',
  imports: [],
  templateUrl: './landing-page-header.html',
  styleUrl: './landing-page-header.scss',
})
export class LandingPageHeader {
user = input<{ name: string } | null>();
  loginClicked = output<void>();

  isLoggedIn = computed(() => !!this.user());
}
