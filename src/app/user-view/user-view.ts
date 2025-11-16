import { Component, computed, inject, input, signal } from '@angular/core';
import { IUser } from '../user/user';
import { Task } from '../task/task';
import { NewTask } from '../new-task/new-task';
import { UserViewTasksService } from './user-view-tasks.service';

@Component({
  selector: 'app-user-view',
  imports: [Task, NewTask],
  templateUrl: './user-view.html',
  styleUrl: './user-view.css',
})
export class UserView {
  selectedUser = input.required<IUser | undefined>();

  private tasksService = inject(UserViewTasksService);

  imagePath = computed(() => `users/${this.selectedUser()?.avatar}`);

  addTaskVisible = signal(false);

  getSelectedUserTasks() {
    return this.tasksService.getUserTasks(this.selectedUser()!.id);
  }

  toggleAddTask() {
    this.addTaskVisible.set(!this.addTaskVisible());
  }
}
