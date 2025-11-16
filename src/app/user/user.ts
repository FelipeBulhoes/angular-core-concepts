import { Component, computed, input, output } from '@angular/core';

export interface IUser {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  // Input signals - type-safe component inputs
  user = input.required<IUser>();
  selected = input.required<boolean>();

  // Output - emit events to parent component
  onSelect = output<IUser>();

  // Computed signal - derived value that auto-updates
  imagePath = computed(() => `users/${this.user().avatar}`);

  onUserClick() {
    this.onSelect.emit(this.user());
  }
}
