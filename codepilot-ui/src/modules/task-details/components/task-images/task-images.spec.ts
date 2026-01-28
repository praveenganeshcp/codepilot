import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskImages } from './task-images';

describe('TaskImages', () => {
  let component: TaskImages;
  let fixture: ComponentFixture<TaskImages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskImages],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskImages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
