import { getTasks, saveTasks } from '../utils/storage.js';

export const deleteTask = (id) => {
    const tasks = getTasks();
    const taskId = parseInt(id);
    
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex === -1) {
        console.log(`Task ${id} not found`);
        return;
    }
    
    tasks.splice(taskIndex, 1);
    saveTasks(tasks);
    console.log(`Task ${id} deleted`);
};