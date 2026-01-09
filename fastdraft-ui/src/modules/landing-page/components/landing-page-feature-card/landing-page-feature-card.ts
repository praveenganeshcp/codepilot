import { Component, input } from '@angular/core';

@Component({
  selector: 'app-landing-page-feature-card',
  imports: [],
  templateUrl: './landing-page-feature-card.html',
  styleUrl: './landing-page-feature-card.scss',
})
export class LandingPageFeatureCard {
title = input.required<string>();
  description = input.required<string>();
}
