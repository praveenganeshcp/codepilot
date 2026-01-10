import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskSpecPane } from './task-spec-pane';

describe('TaskSpecPane', () => {
  let component: TaskSpecPane;
  let fixture: ComponentFixture<TaskSpecPane>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskSpecPane]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskSpecPane);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
