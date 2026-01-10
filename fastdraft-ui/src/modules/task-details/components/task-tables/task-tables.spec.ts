import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTables } from './task-tables';

describe('TaskTables', () => {
  let component: TaskTables;
  let fixture: ComponentFixture<TaskTables>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskTables]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskTables);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
