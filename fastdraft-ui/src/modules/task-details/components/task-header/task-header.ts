import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-task-header',
  imports: [],
  templateUrl: './task-header.html',
  styleUrl: './task-header.scss',
})
export class TaskHeader {
  title = input.required<string>();
  edit = output<void>();
  remove = output<void>();
  start = output<void>();
}
