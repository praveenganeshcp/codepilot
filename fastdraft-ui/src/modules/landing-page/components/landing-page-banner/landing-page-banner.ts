import { Component, input } from '@angular/core';

@Component({
  selector: 'app-landing-page-banner',
  imports: [],
  templateUrl: './landing-page-banner.html',
  styleUrl: './landing-page-banner.scss',
})
export class LandingPageBanner {
title = input.required<string>();
  caption = input.required<string>();
}
