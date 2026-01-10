import { Component, input } from '@angular/core';

@Component({
  selector: 'app-task-images',
  imports: [],
  templateUrl: './task-images.html',
  styleUrl: './task-images.scss',
})
export class TaskImages {
  images = input.required<{ id: string; src: string; caption?: string }[]>();

}
