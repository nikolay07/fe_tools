import { initCalendar } from './inititalCalendarData';

export const getStorage = () => {
  const newArr = localStorage.getItem('remindersStorage');
  return newArr ? JSON.parse(newArr) : [];
};

export const setStorage = (value) => {
  // let remindersStorage = value;
  localStorage.setItem('remindersStorage', JSON.stringify(value));
};

export const getStorageDefaultColor = () => {
  const itemColor = localStorage.getItem('itemColor');
  if (itemColor) {
    initCalendar.itemColor = JSON.parse(itemColor);
  }
};

export const setStorageDefaultColor = (value) => {
  localStorage.setItem('itemColor', JSON.stringify(`${value}`));
};
