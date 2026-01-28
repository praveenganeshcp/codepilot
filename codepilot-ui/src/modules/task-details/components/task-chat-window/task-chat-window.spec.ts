import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskChatWindow } from './task-chat-window';

describe('TaskChatWindow', () => {
  let component: TaskChatWindow;
  let fixture: ComponentFixture<TaskChatWindow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskChatWindow],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskChatWindow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
