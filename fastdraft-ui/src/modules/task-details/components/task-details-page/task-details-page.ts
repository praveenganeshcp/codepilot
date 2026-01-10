import { Component, signal } from '@angular/core';
import { Task } from '../../models/domain';
import { TaskHeader } from '../task-header/task-header';
import { TaskSpecPane } from '../task-spec-pane/task-spec-pane';
import { TaskChatWindow } from '../task-chat-window/task-chat-window';

@Component({
  selector: 'app-task-details-page',
  imports: [
    TaskHeader,
    TaskSpecPane,
    TaskChatWindow
  ],
  templateUrl: './task-details-page.html',
  styleUrl: './task-details-page.scss',
})
export class TaskDetailsPage {
task = signal<Task>({
    id: '1',
    title: 'Investigate API failure',
    spec: {
      description: 'Analyze logs and determine why API requests fail intermittently.',
      images: [],
      tables: []
    }
  });
}
