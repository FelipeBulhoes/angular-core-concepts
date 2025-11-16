import { Component, inject, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserViewTasksService } from '../user-view/user-view-tasks.service';
import { IUser } from '../user/user';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule], // Import FormsModule for two-way binding
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  selectedUser = input.required<IUser>();

  cancel = output<void>();

  // Modern dependency injection using inject() function
  private tasksService = inject(UserViewTasksService);

  // Form data managed with signals
  inputTitle = signal('');
  inputDescription = signal('');

  onCancel() {
    this.cancel.emit();
  }

  onAdd() {
    this.tasksService.addTask(
      {
        title: this.inputTitle(),
        description: this.inputDescription(),
      },
      this.selectedUser().id
    );
    this.cancel.emit();
  }
}
