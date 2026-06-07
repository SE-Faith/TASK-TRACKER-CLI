import { addTask } from './commands/add.js';

const args = process.argv.slice(2);

if (args[0] === 'add') {
    addTask(args[1]);
}