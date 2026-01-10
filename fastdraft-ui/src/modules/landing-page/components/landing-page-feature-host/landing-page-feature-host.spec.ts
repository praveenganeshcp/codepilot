import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageFeatureHost } from './landing-page-feature-host';

describe('LandingPageFeatureHost', () => {
  let component: LandingPageFeatureHost;
  let fixture: ComponentFixture<LandingPageFeatureHost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingPageFeatureHost],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingPageFeatureHost);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
