import { Component } from '@angular/core';
import { Task } from './Task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'to-do-list-angular';

  allTasks: Task[] = [
    {
      description: 'Walking the dog around the block',
      completed: false,
      dateAdded: new Date(),
    },
  ];

  get tasks() {
    return this.allTasks;
  }

  addTask(description: string) {
    this.allTasks.unshift({
      description,
      completed: false,
      dateAdded: new Date(),
    });
  }
}
