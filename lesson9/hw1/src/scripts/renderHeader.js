import { initCalendar } from './inititalCalendarData';
import { changeWeek } from './weekSelector';
import { renderNavbar } from './renderNavbar';
import { renderCalendar } from './renderCalendar';
import { showPopUpForm, resetPopUpForm } from './renderPopUp';

const miliSecondsPerDay = 86400000;
const monthes = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const date = document.getElementById('date');


export const renderHeaderText = () => {
  const headerSelectedPeriod = document.querySelector('.header__selected-period');
  const currentMonday = new Date(initCalendar.selectedWeek);
  let checkDay = initCalendar.selectedWeek;
  let period = `${monthes[currentMonday.getMonth()]} ${currentMonday.getFullYear()}`;
  for (let i = 0; i < 6; i++) {
    checkDay += miliSecondsPerDay;
    if (new Date(checkDay).getMonth() !== currentMonday.getMonth()) {
      if (new Date(checkDay).getFullYear() !== currentMonday.getFullYear()) {
        period = `${monthes[currentMonday.getMonth()]} ${currentMonday.getFullYear()} - ${monthes[new Date(checkDay).getMonth()]} ${new Date(checkDay).getFullYear()}`;
      } else {
        period = `${monthes[currentMonday.getMonth()]} - ${monthes[new Date(checkDay).getMonth()]} ${currentMonday.getFullYear()}`;
      }
    }
  }
  headerSelectedPeriod.innerHTML = period;
};

// Switch week with navigation;
const previousWeek = document.querySelector('.weeks-selectors-block__previous-week');
const nextWeek = document.querySelector('.weeks-selectors-block__next-week');

const onTodayClick = () => {
  initCalendar.getMonday();
  renderNavbar();
  renderCalendar();
  renderHeaderText();
};

const todayBtn = document.querySelector('.header__today');

// Create Btn

const getCurrentDate = () => {
  const dateNow2 = new Date();
  return `${dateNow2.getFullYear()}-${dateNow2.getMonth() < 10
    ? `0${dateNow2.getMonth() + 1}`
    : `${dateNow2.getMonth() + 1}`}-${dateNow2.getDate() < 10
    ? `0${dateNow2.getDate()}`
    : `${dateNow2.getDate()}`}`;
};

const createBtn = document.querySelector('.header__create');
const onCreateBtnClick = () => {
  resetPopUpForm();
  date.value = getCurrentDate();
  showPopUpForm();
};

export const initHeaderEventListeners = () => {
  createBtn.addEventListener('click', onCreateBtnClick);
  previousWeek.addEventListener('click', changeWeek);
  nextWeek.addEventListener('click', changeWeek);
  todayBtn.addEventListener('click', onTodayClick);
};
