import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskMessage } from './task-message';

describe('TaskMessage', () => {
  let component: TaskMessage;
  let fixture: ComponentFixture<TaskMessage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskMessage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskMessage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
