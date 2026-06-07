import { getTasks, saveTasks } from '../utils/storage.js';

export const addTask = (description) => {
    if (!description) {
        console.log('Please provide a task description');
        return;
    }

    const tasks = getTasks();
    if (tasks.find(task => task.description === description)) {
        console.log('Task already exists');
        return;
    }

    const newTask = {
        id: tasks.length + 1,
        description,
        status: 'todo',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };
    
    tasks.push(newTask);
    saveTasks(tasks);
    console.log(`Task added successfully (ID: ${newTask.id})`);
};