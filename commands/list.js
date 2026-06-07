import { getTasks } from '../utils/storage.js';

export const listTasks = () => {
    const tasks = getTasks();
    console.log('Tasks:');
    tasks.forEach(task => {
        console.log(`${task.id}. ${task.description} - ${task.status}`);
    });
};

export const listTasksByStatus = (status) => {
    const tasks = getTasks();
    console.log(`Tasks with status "${status}":`);
    tasks.forEach(task => {
        if (task.status === status) {
            console.log(`${task.id}. ${task.description}`);
        }
    });
    if (tasks.every(task => task.status !== status)) {
        console.log('No tasks found with that status');
    }
};
