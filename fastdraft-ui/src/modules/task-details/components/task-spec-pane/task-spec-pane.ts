import { Component, input } from '@angular/core';
import { Task } from '../../models/domain';
import { TaskDescription } from '../task-description/task-description';
import { TaskImages } from '../task-images/task-images';
import { TaskTables } from '../task-tables/task-tables';

@Component({
  selector: 'app-task-spec-pane',
  imports: [TaskDescription, TaskImages, TaskTables],
  templateUrl: './task-spec-pane.html',
  styleUrl: './task-spec-pane.scss',
})
export class TaskSpecPane {
  task = input.required<Task>();
}
