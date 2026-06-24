# Todo Tracker App

A modern and responsive task management application built with React and Tailwind CSS. Users can create, update, delete, search, and organize tasks efficiently with an attractive glassmorphism-inspired user interface.

## 🚀 Features

### Task Management

- Add new tasks
- Edit existing tasks
- Delete individual tasks
- Delete all tasks at once
- Mark tasks as favorite
- Priority-based task organization

### Search Functionality

- Search tasks instantly by title

### Task Details

Each task contains:

- Title
- Description
- Tags
- Priority Level (High, Medium, Low)

### User Interface

- Responsive design
- Glassmorphism-inspired UI
- Modern dark theme
- Interactive buttons and hover effects
- Clean and organized layout

---

## 🛠️ Technologies Used

### Frontend

- React
- JavaScript (ES6+)
- Tailwind CSS
- Vite

### State Management

- React Hooks
  - useState

---

## 📁 Project Structure

```text
src/
│
├── components/
│   ├── Header.jsx
│   ├── HeroSection.jsx
│   ├── SearchTask.jsx
│   ├── TaskBoard.jsx
│   ├── TaskList.jsx
│   ├── TaskActions.jsx
│   ├── TaskModal.jsx
│   └── Footer.jsx
│
├── data/
│   └── tasks.js
│
├── App.jsx
└── main.jsx
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone <repository-url>
```

### Navigate to project directory

```bash
cd revision-2-todo-tracker-app
```

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

---

## 🏗️ Build for Production

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

## 📚 Concepts Practiced

- Component-based architecture
- Props drilling
- State lifting
- Conditional rendering
- Form handling
- Array methods (map, filter)
- Event handling
- Controlled components
- Search implementation
- CRUD operations
- Responsive UI development

---

## 🎯 Learning Objectives

This project was built to practice:

- React fundamentals
- Component communication
- State management with hooks
- Dynamic rendering
- Modern UI styling using Tailwind CSS
- Real-world CRUD application structure

---

## 📸 Application Features Overview

### Add Task

Users can create new tasks with title, description, tags, and priority.

### Edit Task

Existing tasks can be updated without creating duplicates.

### Delete Task

Individual tasks can be removed from the task list.

### Delete All

All tasks can be cleared with a single action.

### Search Task

Tasks can be searched dynamically through the search field.

### Favorite Task

Important tasks can be highlighted as favorites.

---

## Future Improvements

- Local Storage persistence
- Drag and drop task management
- Task categories
- Due dates
- Authentication
- Backend integration
- Database support
- Dark/Light mode toggle

---

## Author

Developed as part of React practice and learning projects.

---

## License

This project is open source and available under the MIT License.
