import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const tasksPath = path.join(__dirname, '../tasks.json');

// read tasks from file
const getTasks = () => {
    try{
        const data = fs.readFileSync(tasksPath, 'utf8');
        return JSON.parse(data);
    }
    catch(error){
        console.error('Error reading tasks:', error);
        return [];
    }
};

// save tasks to file
const saveTasks = (tasks) => {
    try{
        fs.writeFileSync(tasksPath, JSON.stringify(tasks, null, 2));
    }
    catch(error){
        console.error('Error saving tasks:', error);
    }
};

export {
    getTasks,
    saveTasks
};