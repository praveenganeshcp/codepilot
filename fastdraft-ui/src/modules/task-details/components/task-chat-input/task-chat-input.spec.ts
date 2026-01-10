import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskChatInput } from './task-chat-input';

describe('TaskChatInput', () => {
  let component: TaskChatInput;
  let fixture: ComponentFixture<TaskChatInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskChatInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskChatInput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
