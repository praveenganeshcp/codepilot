import { Component, output } from '@angular/core';

@Component({
  selector: 'app-task-chat-input',
  imports: [],
  templateUrl: './task-chat-input.html',
  styleUrl: './task-chat-input.scss',
})
export class TaskChatInput {
send = output<string>();
  submit(v: string) { this.send.emit(v); }
}
