import { Component, inject, input, output } from '@angular/core';
import { ITask } from './task.model';
import { UserViewTasksService } from '../user-view/user-view-tasks.service';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  task = input.required<ITask>();

  private tasksService = inject(UserViewTasksService);

  onCompleteClick() {
    this.tasksService.completeTask(this.task().id);
  }
}
