import { initCalendar } from './inititalCalendarData.js';

export const getStorage = () => {
    let newArr = localStorage.getItem("remindersStorage");
    return newArr ? JSON.parse(newArr) : [];
};

export const setStorage = (value) => {
    let remindersStorage = value
    localStorage.setItem("remindersStorage", JSON.stringify(remindersStorage));
}; 

export const getStorageDefaultColor = () => {
    let itemColor = localStorage.getItem("itemColor");
    if (itemColor) {
        initCalendar.itemColor = JSON.parse(itemColor);
    };
};

export const setStorageDefaultColor = (value) => {
    localStorage.setItem("itemColor", JSON.stringify(`${value}`));
};
