# Task Management App

![Angular](https://img.shields.io/badge/Angular-20.3-red?logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green)
![Status](https://img.shields.io/badge/Status-Learning%20Project-yellow)

A modern task management application built with Angular 20.3, demonstrating the latest Angular features including standalone components, signals, and reactive state management.

> **Note:** This is a learning project created to explore and demonstrate modern Angular patterns and best practices.

## Overview

This application allows you to manage tasks across multiple team members. Select a user from the sidebar to view their assigned tasks, add new tasks, or mark existing tasks as complete. The app showcases modern Angular development patterns and best practices.

## Features

- **User Selection**: Browse through a list of team members and select one to view their tasks
- **Task Management**: View all tasks assigned to a specific user
- **Add Tasks**: Create new tasks with title and description for any user
- **Complete Tasks**: Mark tasks as done to track progress
- **Responsive Design**: Clean, modern UI with Montserrat font
- **Reactive State**: Built with Angular signals for efficient state management

## Tech Stack

- **Angular 20.3** - Latest stable version with modern features
- **TypeScript 5.9** - Type-safe development
- **RxJS 7.8** - Reactive programming
- **Standalone Components** - No NgModules required
- **Signals** - Modern reactive state management
- **Angular CLI 20.3.7** - Build tooling and development server

## Project Structure

```
src/app/
├── header/                    # Application header component
├── user/                      # User list and selection component
├── user-view/                 # User detail view with tasks
│   ├── user-view.ts          # Main user view component
│   └── user-view-tasks.service.ts  # Task management service
├── task/                      # Individual task display component
│   ├── task.ts               # Task component
│   └── task.model.ts         # Task interface/model
├── new-task/                  # Form to create new tasks
├── mock-data/                 # Sample data
│   ├── mock-users.ts         # Demo users
│   └── mock-tasks.ts         # Demo tasks
├── app.ts                     # Root component
├── app.config.ts              # Application configuration
└── app.routes.ts              # Routing configuration
```

## What You'll Learn

This project is designed as a hands-on learning resource for modern Angular development. By exploring the code, you'll learn:

### Core Concepts

- **Standalone Components**: Build Angular apps without NgModules
- **Signals API**: Reactive state management with fine-grained reactivity
- **Computed Values**: Automatically derived state that updates when dependencies change
- **Input/Output Signals**: Modern component communication patterns
- **Dependency Injection**: Using the `inject()` function for cleaner code

### Practical Patterns

- **Component Architecture**: Breaking down UI into reusable components
- **Service Layer**: Centralizing business logic and state management
- **Event Communication**: Parent-child component interaction
- **Form Handling**: Two-way data binding with signals
- **Immutable Updates**: State management best practices

### Modern TypeScript

- Strong typing with interfaces
- Type-safe component inputs and outputs
- Generic types with signals

📚 **For a detailed walkthrough of these concepts, see [LEARNING.md](./LEARNING.md)**

## Modern Angular Features

This project demonstrates several cutting-edge Angular features:

- **Standalone Components**: No module declarations needed
- **Signals**: Reactive state management with `signal()` and `computed()`
- **Input Signals**: Type-safe component inputs with `input.required()`
- **Dependency Injection**: Service injection with `inject()` function
- **Component Composition**: Modular, reusable components

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd angular-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open your browser and navigate to `http://localhost:4200/`

The application will automatically reload when you make changes to the source files.

## Development Commands

### Start Development Server

```bash
npm start
# or
ng serve
```

### Build for Production

```bash
npm run build
```

Builds the project to `dist/` directory with optimizations for production.

### Run Unit Tests

```bash
npm test
```

Executes tests using Jasmine and Karma test runner.

### Watch Mode (Development Build)

```bash
npm run watch
```

Continuously builds the project during development.

## Code Scaffolding

Generate new components, services, and other Angular artifacts:

```bash
# Generate a new component
ng generate component component-name

# Generate a new service
ng generate service service-name

# View all available schematics
ng generate --help
```

## Code Style

This project uses Prettier for code formatting with the following configuration:

- Print width: 100 characters
- Single quotes for strings
- Angular parser for HTML files

## Learning Resources

This project is great for learning:

- Modern Angular development patterns
- Standalone components architecture
- Signal-based state management
- Service-based architecture
- Component communication

## Additional Resources

- [Angular Documentation](https://angular.dev)
- [Angular CLI Reference](https://angular.dev/tools/cli)
- [Angular Signals Guide](https://angular.dev/guide/signals)
- [Standalone Components Guide](https://angular.dev/guide/components/importing)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

This is a learning project, but contributions are welcome! Feel free to:
- Report bugs
- Suggest new features to demonstrate additional Angular concepts
- Improve documentation
- Add more examples

## Acknowledgments

Built with Angular 20.3 to explore and share modern Angular development patterns.
