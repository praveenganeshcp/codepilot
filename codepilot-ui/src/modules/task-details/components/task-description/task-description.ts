import { Component, input } from '@angular/core';

@Component({
  selector: 'app-task-description',
  imports: [],
  templateUrl: './task-description.html',
  styleUrl: './task-description.scss',
})
export class TaskDescription {
  text = input.required<string>();
}
