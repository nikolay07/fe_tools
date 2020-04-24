import { getItem } from '../common/storage.js';
import { generateWeekRange, createNumbersArray } from '../common/time.utils.js';
import { renderEvents } from '../events/events.js';

const week = document.querySelector('.calendar__week');
const generateDay = () => {
    // функция должна сгенерировать и вернуть разметку недели в виде строки
    // разметка состоит из 24 часовых временных слотов (.calendar__time-slot)
    const time = createNumbersArray(0, 23)
        .map(elem => `<div class="calendar__time-slot" data-time="${elem}"></div>`)
        .join('');
    return time;
};

export const renderWeek = () => {
    // функция должна сгенерировать разметку недели в виде строки и вставить ее на страницу (в .calendar__week)
    // разметка недели состоит из 7 дней (.calendar__day) отображаемой недели
    // каждый день должен содержать в дата атрибуте порядковый номер для в месяце
    // какую неделю отображать - берем из storage
    // после того, как отрисовали всю сетку для отображаемой недели - добавляем события методом renderEvents
    const days = createNumbersArray(1, 7)
        .map(elem => `<div class="calendar__day" data-day="${elem}">
                            ${generateDay()}
                    </div>`)
        .join('');
    week.innerHTML = days;
};