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
      title: 'Walk the dog',
      description: 'Walking the dog around the block',
      completed: false,
      dateAdded: new Date(),
      dateUpdated: new Date(),
    },
  ];

  get tasks() {
    return this.allTasks;
  }
}
