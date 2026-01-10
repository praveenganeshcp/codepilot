import { Component, input } from '@angular/core';

@Component({
  selector: 'app-task-message',
  imports: [],
  templateUrl: './task-message.html',
  styleUrl: './task-message.scss',
})
export class TaskMessage {
  role = input<'user' | 'agent'>();
  text = input<string>();
}
