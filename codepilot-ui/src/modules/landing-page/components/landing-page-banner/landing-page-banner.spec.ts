import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageBanner } from './landing-page-banner';

describe('LandingPageBanner', () => {
  let component: LandingPageBanner;
  let fixture: ComponentFixture<LandingPageBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingPageBanner],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingPageBanner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
