import { getTasks, saveTasks } from '../utils/storage.js';

export const updateTask = (id, updates) => {
    
    const tasks = getTasks();
    const taskId = parseInt(id);
    
    const task = tasks.find(task => task.id === taskId);
    if (!task) {
        console.log(`Task ${id} not found`);
        return;
    }
    
    // Parse updates string (e.g., "status: done" or just "done" or "Buy milk")
    if (updates) {
        if (updates.includes(':')) {
            const [key, value] = updates.split(':').map(s => s.trim());
            if (key === 'status') {
                task.status = value;
            } else if (key === 'description') {
                task.description = value;
            }
        } else {
            // If no colon, treat as description
            task.description = updates;
        }
    }
    
    // update updated_at
    task.updatedAt = new Date().toISOString();
    saveTasks(tasks);
    console.log(`Task ${id} updated`);
};
