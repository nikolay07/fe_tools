export let tasks = [];

export const getTasks = () => {
    let newArr = JSON.parse(localStorage.getItem("arrOfTasks"));
    if (newArr) {
        tasks = newArr
    }
};

export const setTasks = (value) => {
    localStorage.setItem("arrOfTasks", JSON.stringify(value))
};