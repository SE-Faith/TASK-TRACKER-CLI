# Task Tracker CLI

A simple command-line interface (CLI) application for managing tasks using Node.js and a local JSON file for storage.

---

## Features

- Add new tasks
- Update existing tasks
- Delete tasks
- Mark tasks as in-progress or done
- List all tasks
- List tasks by status (todo, in-progress, done)
- Persistent storage using a local JSON file

---

## Tech Stack

- Node.js
- File System (`fs` module)
- JSON (for storage)
- Command Line Interface (CLI)

---

## Installation

Clone the repository:

```bash
git clone https://github.com/SE-Faith/TASK-TRACKER-CLI.git
````

Navigate into the project directory:

```bash
cd task tracker cli
```


---

## Usage

### Add a task

```bash
node index.js add "Buy groceries"
```

### Update a task

```bash
node index.js update 1 "Buy groceries and cook dinner"
```

### Delete a task

```bash
node index.js delete 1
```

### Mark task as in-progress

```bash
node index.js mark-in-progress 1
```

### Mark task as done

```bash
node index.js mark-done 1
```

### List all tasks

```bash
node index.js list
```

### Filter tasks by status

```bash
node index.js list done
node index.js list todo
node index.js list in-progress
```

---

## Task Structure

Each task is stored in `tasks.json`:

```json
{
  "id": 1,
  "description": "Buy groceries",
  "status": "todo",
  "createdAt": "2026-06-07T10:00:00.000Z",
  "updatedAt": "2026-06-07T10:00:00.000Z"
}
```

---

## What I Learned

* Building a CLI application with Node.js
* Working with the file system (`fs`)
* Handling command-line arguments
* JSON-based data storage
* Structuring a modular backend project

---

## Author

Built as a learning project to practice backend development fundamentals.

```
```


