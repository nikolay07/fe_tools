import { setTasks, getTasks } from './scripts/storage';
import { initInputHandlets } from './scripts/createTask';
import { renderListItem } from './scripts/renderListItems';
import { getTasksList } from './scripts/tasksGateway';
import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
  getTasksList()
    .then((value) => {
      setTasks(value);
      getTasks();
      renderListItem();
    });
  initInputHandlets();
});

const onStorageChange = () => {
  getTasks();
  renderListItem();
};

window.addEventListener('storage', onStorageChange);
