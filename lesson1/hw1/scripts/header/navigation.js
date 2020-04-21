import { getItem, setItem } from '../common/storage.js';
import { renderWeek } from '../calendar/calendar.js';
import { renderHeader } from '../calendar/header.js';
import { getStartOfWeek, getDisplayedMonth } from '../common/time.utils.js';

const navElem = document.querySelector('.navigation');
const displayedMonthElem = document.querySelector('.navigation__displayed-month');

function renderCurrentMonth() {
    // отрисовать месяц, к которому относиться текущая неделя
    displayedMonthElem.innerHTML = `${getDisplayedMonth(getItem('displayedWeekStart'))}`
}

const onChangeWeek = e => {
    // при переключении недели обновите displayedWeekStart в storage
    // и перерисуйте все необходимые элементы страницы (renderHeader, renderWeek, renderCurrentMonth, renderRedLine)
    const startOfWeek = getItem('displayedWeekStart');
    const firstDayOfWeek = new Date(startOfWeek);

    const todayWeek = document.querySelector('.navigation__today-btn');
    todayWeek.addEventListener('click', () => { setItem('displayedWeekStart', getStartOfWeek(new Date())) });
    todayWeek.addEventListener('mouseover', () => {
        todayWeek.classList.add('todayWeek');
    })
    todayWeek.addEventListener('mouseout', () => {
        todayWeek.classList.remove('todayWeek');
    })

    const nextWeek = document.querySelector('.fa-chevron-right');
    nextWeek.addEventListener('click', () => {
        firstDayOfWeek.setDate(startOfWeek.getDate() + 7);
        setItem('displayedWeekStart', firstDayOfWeek);
    });
    nextWeek.addEventListener('mousedown', () => {
        nextWeek.classList.add('nextWeek');
    })
    nextWeek.addEventListener('mouseup', () => {
        nextWeek.classList.remove('nextWeek');
    })

    const prewWeek = document.querySelector('.fa-chevron-left');
    prewWeek.addEventListener('click', () => {
        firstDayOfWeek.setDate(startOfWeek.getDate() - 7);
        setItem('displayedWeekStart', firstDayOfWeek);
    });
    prewWeek.addEventListener('mousedown', () => {
        prewWeek.classList.add('prewWeek');
    })
    prewWeek.addEventListener('mouseup', () => {
        prewWeek.classList.remove('prewWeek');
    })

    renderHeader();
    renderWeek();
    renderCurrentMonth();
};

export const initNavigation = () => {
    renderCurrentMonth();
    navElem.addEventListener('click', onChangeWeek);
};