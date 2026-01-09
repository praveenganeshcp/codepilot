import { Component, signal } from '@angular/core';
import { LandingPageBanner } from '../landing-page-banner/landing-page-banner';
import { LandingPageFeatureCard } from '../landing-page-feature-card/landing-page-feature-card';
import { LandingPageHeader } from '../landing-page-header/landing-page-header';

@Component({
  selector: 'app-landing-page-feature-host',
  imports: [
    LandingPageBanner,
    LandingPageFeatureCard,
    LandingPageHeader
  ],
  templateUrl: './landing-page-feature-host.html',
  styleUrl: './landing-page-feature-host.scss',
})
export class LandingPageFeatureHost {
  user = signal<{ name: string } | null>({ name: 'Praveen' });

  features = signal([
    {
      title: 'Spec Driven Development',
      description: 'Upload your Eng Specs. FastDraft AI agents consumes relevant input from the document and produces reliable code output'
    },
    {
      title: 'Speccing > Coding',
      description: 'You can focus on Speccing, FastDraft agents writes production ready code for you by understanding your Eng Specs'
    },
    {
      title: 'Rapid Feature Development',
      description: 'While Cursor shines on adhoc tasks and bug fixes, FastDraft focuses on end to end feature development to help you ship features quickly'
    },
  ]);

  login() {
    this.user.set({ name: 'Praveen' });
  }
}
