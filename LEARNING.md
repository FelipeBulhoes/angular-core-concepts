# Learning Guide: Modern Angular Features

This guide walks through the key Angular concepts demonstrated in this task management application.

## Table of Contents

1. [Standalone Components](#standalone-components)
2. [Signals](#signals)
3. [Input Signals](#input-signals)
4. [Computed Signals](#computed-signals)
5. [Output Events](#output-events)
6. [Dependency Injection with inject()](#dependency-injection-with-inject)
7. [Services](#services)
8. [Component Communication](#component-communication)

---

## Standalone Components

**What it is:** Components that don't require NgModule declarations.

**Example:** `src/app/app.ts:7-13`

```typescript
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, User, UserView], // Import dependencies directly
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App { ... }
```

**Key Points:**
- No need for `@NgModule` declarations
- Import dependencies directly in the component decorator
- Cleaner, more modular code structure
- Default in Angular 15+

---

## Signals

**What it is:** Reactive primitives for state management that automatically track dependencies.

**Example:** `src/app/app.ts:21`

```typescript
selectedUser = signal<IUser | undefined>(undefined);

// Update signal value
this.selectedUser.set(user);

// Read signal value (note the function call)
const currentUser = this.selectedUser();
```

**Key Points:**
- Call signal as a function to read: `selectedUser()`
- Use `.set()` to update: `selectedUser.set(newValue)`
- Angular automatically tracks which components use this signal
- More efficient change detection than traditional approaches

---

## Input Signals

**What it is:** Type-safe, reactive component inputs using signals.

**Example:** `src/app/user/user.ts:16-18`

```typescript
user = input.required<IUser>();
selected = input.required<boolean>();
```

**Key Points:**
- Replace traditional `@Input()` decorators
- `input.required<T>()` for mandatory inputs
- `input<T>(defaultValue)` for optional inputs
- Access value by calling as function: `this.user()`

---

## Computed Signals

**What it is:** Derived values that automatically recalculate when dependencies change.

**Example:** `src/app/user/user.ts:24`

```typescript
imagePath = computed(() => `users/${this.user().avatar}`);
```

**Key Points:**
- Automatically updates when `user()` changes
- Memoized - only recalculates when dependencies change
- Accessed like regular signals: `this.imagePath()`
- More efficient than methods called in templates

---

## Output Events

**What it is:** Modern way to emit events from child to parent components.

**Example:** `src/app/user/user.ts:21`

```typescript
onSelect = output<IUser>();

// Emit event
this.onSelect.emit(this.user());
```

**Key Points:**
- Replace traditional `@Output()` decorators
- Type-safe event emission
- Used for child-to-parent communication

**Usage in parent template:**
```html
<app-user (onSelect)="onUserSelect($event)" />
```

---

## Dependency Injection with inject()

**What it is:** Function-based dependency injection instead of constructor injection.

**Example:** `src/app/new-task/new-task.ts:18`

```typescript
private tasksService = inject(UserViewTasksService);
```

**Traditional way (still works):**
```typescript
constructor(private tasksService: UserViewTasksService) {}
```

**Key Points:**
- Cleaner, more concise syntax
- Can be used outside of constructors
- Recommended modern approach in Angular

---

## Services

**What it is:** Singleton classes for shared business logic and state.

**Example:** `src/app/user-view/user-view-tasks.service.ts:4-6`

```typescript
@Injectable({ providedIn: 'root' })
export class UserViewTasksService {
  private tasks = DUMMY_TASKS;
  // ... methods
}
```

**Key Points:**
- `providedIn: 'root'` makes service available app-wide
- Single instance shared across components
- Perfect for data management and business logic
- Injected into components using `inject()`

---

## Component Communication

### Parent to Child (via Inputs)

**Parent:** `src/app/app.html`
```html
<app-user-view [selectedUser]="selectedUser()" />
```

**Child:** `src/app/user-view/user-view.ts:14`
```typescript
selectedUser = input.required<IUser | undefined>();
```

### Child to Parent (via Outputs)

**Child:** `src/app/user/user.ts`
```typescript
onSelect = output<IUser>();

onUserClick() {
  this.onSelect.emit(this.user());
}
```

**Parent:** `src/app/app.html`
```html
<app-user (onSelect)="onUserSelect($event)" />
```

**Parent:** `src/app/app.ts:23-25`
```typescript
onUserSelect(user: IUser) {
  this.selectedUser.set(user);
}
```

### Via Services (Shared State)

Multiple components can inject the same service to share state:

```typescript
private tasksService = inject(UserViewTasksService);

// Component A adds a task
this.tasksService.addTask(taskData, userId);

// Component B gets tasks
this.tasksService.getUserTasks(userId);
```

---

## Practical Exercises

### Exercise 1: Add a New Signal
Try adding a `searchQuery` signal to filter users by name.

### Exercise 2: Create a Computed Value
Create a computed signal that counts the total tasks for all users.

### Exercise 3: Add a New Service Method
Add a method to `UserViewTasksService` to update a task's title.

### Exercise 4: Component Communication
Add a feature to sort tasks by title, communicating the sort order from parent to child.

---

## Key Differences from Traditional Angular

| Feature | Traditional | Modern (This App) |
|---------|-------------|-------------------|
| Modules | NgModule required | Standalone components |
| State | Variables + ChangeDetectorRef | Signals |
| Inputs | @Input() decorator | input.required<T>() |
| Outputs | @Output() decorator | output<T>() |
| DI | Constructor injection | inject() function |
| Computed | Methods in template | computed() signals |

---

## Additional Resources

- [Angular Signals Documentation](https://angular.dev/guide/signals)
- [Standalone Components Guide](https://angular.dev/guide/components/importing)
- [Dependency Injection Guide](https://angular.dev/guide/di)
- [Component Interaction](https://angular.dev/guide/components/inputs)

---

## Next Steps

1. Experiment with the code - change values and see what happens
2. Add new features using the patterns you've learned
3. Read the official Angular documentation for deeper understanding
4. Build your own project using these modern patterns
