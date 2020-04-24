import { setTasks, getTasks } from './scripts/storage.js';
import { initInputHandlets } from './scripts/createTask.js';
import { renderListItem } from './scripts/renderListItems.js';
import { getTasksList } from './scripts/tasksGateway.js';
import './index.scss';

document.addEventListener("DOMContentLoaded", () => {
    getTasksList()
        .then((value) => {
            setTasks(value)
            getTasks();
            renderListItem();
        })
    initInputHandlets();
});

const onStorageChange = () => {
    getTasks();
    renderListItem();
}

window.addEventListener("storage", onStorageChange)