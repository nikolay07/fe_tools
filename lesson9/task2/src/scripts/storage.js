export const tasks = [];

export const getTasks = () => {
  const newArr = JSON.parse(localStorage.getItem('arrOfTasks'));
  if (newArr) {
    tasks = newArr;
  }
};

export const setTasks = (value) => {
  localStorage.setItem('arrOfTasks', JSON.stringify(value));
};
