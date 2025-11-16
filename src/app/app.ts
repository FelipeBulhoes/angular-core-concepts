import { Component, computed, signal } from '@angular/core';
import { HeaderComponent } from './header/header';
import { IUser, User } from './user/user';
import { DUMMY_USERS } from './mock-data/mock-users';
import { UserView } from './user-view/user-view';

// Root standalone component - no NgModule required
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, User, UserView], // Direct component imports
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // Signals provide reactive state management
  protected readonly title = signal('angular-app');

  users = DUMMY_USERS;

  // Track selected user with a signal
  selectedUser = signal<IUser | undefined>(undefined);

  onUserSelect(user: IUser) {
    this.selectedUser.set(user); // Update signal value
  }
}
