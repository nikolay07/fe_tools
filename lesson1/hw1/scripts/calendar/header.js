import { getItem } from '../common/storage.js';
import { generateWeekRange } from '../common/time.utils.js';
import { createNumbersArray } from '../common/time.utils.js';
//import { openModal } from '../common/modal.js';

const daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

export const renderHeader = () => {
    // функция должна сгенерировать разметку c днями отображаемой недели (только день недели и число в месяце)
    // полученную разметку вставить на страницу с помощью innerHTML
    // в дата атрибуте каждой ячейки должно хранить для какого часа эта ячейка

    const header = document.querySelector('.calendar__header');
    const days = document.createElement('div');
    days.classList.add('days');

    const day = createNumbersArray(0, 6)
        .map(elem => {
            const firstDayOfWeek = getItem('displayedWeekStart');
            return `<div class="calendar__header-day" data-day="${elem}">
                        ${(daysOfWeek[elem]).toUpperCase()}
                            <div class="calendar__header-number" data-number=" ${generateWeekRange(firstDayOfWeek)[elem].getDate()}">
                                ${generateWeekRange(firstDayOfWeek)[elem].getDate()}
                            </div>
                    </div>`
        })
        .join('');
    header.innerHTML = `<div class="calendar__time-scale_grinvich">GMT+02</div>`
    header.innerHTML += day;
};
renderHeader()


// при клике на кнопку "Create" открыть модальное окно с формой для создания события