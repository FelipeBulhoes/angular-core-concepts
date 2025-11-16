import { Injectable } from '@angular/core';
import { DUMMY_TASKS } from '../mock-data/mock-tasks';

// Root-level service - available throughout the app
@Injectable({ providedIn: 'root' })
export class UserViewTasksService {
  private tasks = DUMMY_TASKS;

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: { title: string; description: string }, userId: string) {
    const newTask = {
      id: (Math.random() * 100000).toFixed(0),
      userId: userId,
      title: taskData.title,
      description: taskData.description,
    };

    // Immutable update pattern
    this.tasks = [newTask, ...this.tasks];
  }

  completeTask(taskId: string) {
    // Remove task by filtering it out
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }
}
