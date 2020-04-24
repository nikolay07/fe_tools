import { tasks, setTasks, getTasks } from './storage';
import { updateTask, getTasksList, deleteTask } from './tasksGateway';

const sortElements = (arr, isDone) => {
  let resultArr;
  if (isDone) {
    resultArr = arr
      .filter((item) => item.done)
      .sort((a, b) => b.finishedDate - a.finishedDate);
  } else {
    resultArr = arr
      .filter((item) => !item.done)
      .sort((a, b) => b.createDate - a.createDate);
  }
  return resultArr;
};

const createElements = (arr) => arr.map(({ text, done, id }) => {
  const listItemElem = document.createElement('li');
  listItemElem.setAttribute('id', id);
  const newClass = done ? 'list__item-done' : 'null';
  listItemElem.classList.add('list__item', newClass);

  const checkBoxElem = document.createElement('input');
  checkBoxElem.setAttribute('type', 'checkbox');

  checkBoxElem.checked = done;
  checkBoxElem.classList.add('list__item-checkbox');

  const deleteBtnELem = document.createElement('button');
  deleteBtnELem.classList.add('list__delete-btn');

  const spanElem = document.createElement('span');
  spanElem.classList.add('list__item-span-text');
  spanElem.textContent = text;
  checkBoxElem.addEventListener('click', onToggleDone);
  deleteBtnELem.addEventListener('click', onDeleteClick);
  listItemElem.append(checkBoxElem, spanElem, deleteBtnELem);
  return listItemElem;
});

export const renderListItem = () => {
  getTasks();
  const listElem = document.querySelector('.list');
  listElem.innerHTML = null;
  listElem.append(...createElements(sortElements(tasks, false)),
    ...createElements(sortElements(tasks, true)));
};

const onToggleDone = (event) => {
  const issueId = event.target.parentElement.id;
  const changedItem = tasks.find((item) => item.id === issueId);

  if (changedItem) {
    changedItem.done = !changedItem.done;
    changedItem.finishedDate = new Date().getTime();

    updateTask(changedItem, changedItem.id)
      .then(() => getTasksList())
      .then((value) => {
        setTasks(value);
        renderListItem();
      });
  }
};

const onDeleteClick = (event) => {
  const issueId = event.target.parentElement.id;
  const deleteItem = tasks.find((item) => item.id === issueId);

  if (deleteItem) {
    deleteTask(deleteItem.id)
      .then(() => getTasksList())
      .then((value) => {
        setTasks(value);
        renderListItem();
      });
  }
};

// 1.Prepare data
// 2. Update data in db
// 3. Read new data from server
// 4. Update UI based on new data
