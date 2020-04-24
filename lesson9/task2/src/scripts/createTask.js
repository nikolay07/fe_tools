import { setTasks } from './storage';
import { renderListItem } from './renderListItems';
import { createTask, getTasksList } from './tasksGateway';


const inputForm = document.querySelector('.input-block');

const handleSubmit = (event) => {
  const inputFieldValue = document.querySelector('.task-input').value;
  const newTask = {
    text: inputFieldValue,
    done: false,
    createDate: new Date().getTime(),
    finishedDate: null,
  };

  event.preventDefault();
  if (inputFieldValue) {
    createTask(newTask)
      .then(() => getTasksList())
      .then((value) => {
        setTasks(value);
        renderListItem();
      });
    document.querySelector('.task-input').value = '';
  }
};

export const initInputHandlets = () => {
  inputForm.addEventListener('submit', handleSubmit);
};
