import { Component, input } from '@angular/core';

@Component({
  selector: 'app-task-tables',
  imports: [],
  templateUrl: './task-tables.html',
  styleUrl: './task-tables.scss',
})
export class TaskTables {
  tables = input.required<any[]>();
}
