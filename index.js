import { addTask } from './commands/add.js';
import { listTasks, listTasksByStatus } from './commands/list.js';
import { updateTask } from './commands/update.js';
import { deleteTask } from './commands/delete.js';

const args = process.argv.slice(2);

if (args[0] === 'add') {
    addTask(args[1]);
}

if (args[0] === 'list') {
    listTasks();
}

if (args[0] === 'list-by') {
    listTasksByStatus(args[1]);
}

if (args[0] === 'update') {
    updateTask(args[1], args.slice(2).join(' '));
}

if (args[0] === 'delete') {
    deleteTask(args[1]);
}
