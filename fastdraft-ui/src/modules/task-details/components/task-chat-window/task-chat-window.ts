import { Component, signal } from '@angular/core';
import { TaskMessage } from '../task-message/task-message';
import { TaskChatInput } from '../task-chat-input/task-chat-input';

@Component({
  selector: 'app-task-chat-window',
  imports: [
    TaskMessage,
    TaskChatInput
  ],
  templateUrl: './task-chat-window.html',
  styleUrl: './task-chat-window.scss',
})
export class TaskChatWindow {
messages = signal<any[]>([]);
  send(text: string) {
    this.messages.update(m => [...m, { id: crypto.randomUUID(), role: 'user', text }]);
  }
}
