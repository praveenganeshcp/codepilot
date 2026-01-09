import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageFeatureCard } from './landing-page-feature-card';

describe('LandingPageFeatureCard', () => {
  let component: LandingPageFeatureCard;
  let fixture: ComponentFixture<LandingPageFeatureCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingPageFeatureCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPageFeatureCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
