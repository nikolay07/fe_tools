import { getItem, setItem } from '../common/storage.js';
import { renderWeek } from '../calendar/calendar.js';
import { renderHeader } from '../calendar/header.js';
import { getStartOfWeek, getDisplayedMonth } from '../common/time.utils.js';
var navElem = document.querySelector('.navigation');
var displayedMonthElem = document.querySelector('.navigation__displayed-month');

function renderCurrentMonth() {
  // отрисовать месяц, к которому относиться текущая неделя
  displayedMonthElem.innerHTML = "".concat(getDisplayedMonth(getItem('displayedWeekStart')));
}

var onChangeWeek = function onChangeWeek(e) {
  // при переключении недели обновите displayedWeekStart в storage
  // и перерисуйте все необходимые элементы страницы (renderHeader, renderWeek, renderCurrentMonth, renderRedLine)
  var startOfWeek = getItem('displayedWeekStart');
  var firstDayOfWeek = new Date(startOfWeek);
  var todayWeek = document.querySelector('.navigation__today-btn');
  todayWeek.addEventListener('click', function () {
    setItem('displayedWeekStart', getStartOfWeek(new Date()));
  });
  todayWeek.addEventListener('mouseover', function () {
    todayWeek.classList.add('todayWeek');
  });
  todayWeek.addEventListener('mouseout', function () {
    todayWeek.classList.remove('todayWeek');
  });
  var nextWeek = document.querySelector('.fa-chevron-right');
  nextWeek.addEventListener('click', function () {
    firstDayOfWeek.setDate(startOfWeek.getDate() + 7);
    setItem('displayedWeekStart', firstDayOfWeek);
  });
  nextWeek.addEventListener('mousedown', function () {
    nextWeek.classList.add('nextWeek');
  });
  nextWeek.addEventListener('mouseup', function () {
    nextWeek.classList.remove('nextWeek');
  });
  var prewWeek = document.querySelector('.fa-chevron-left');
  prewWeek.addEventListener('click', function () {
    firstDayOfWeek.setDate(startOfWeek.getDate() - 7);
    setItem('displayedWeekStart', firstDayOfWeek);
  });
  prewWeek.addEventListener('mousedown', function () {
    prewWeek.classList.add('prewWeek');
  });
  prewWeek.addEventListener('mouseup', function () {
    prewWeek.classList.remove('prewWeek');
  });
  renderHeader();
  renderWeek();
  renderCurrentMonth();
};

export var initNavigation = function initNavigation() {
  renderCurrentMonth();
  navElem.addEventListener('click', onChangeWeek);
};