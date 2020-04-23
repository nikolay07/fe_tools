import { createNumbersArray } from '../common/time.utils.js';

export const renderTimescale = () => {
    // ф-ция должна генерировать разметку для боковой шкалы времени (24 часа)
    // полученную разметку вставьте на страницу с помощью innerHTML
    const timeScale = createNumbersArray(0, 23)
        .map(elem => {
            let time = `${elem < 10 ? "0" + elem : elem}:00`;
            return `<div class="calendar__time-scale_hours" id="${time}">${time}</div>`
        })
        .join('');

    document.querySelector('.calendar__time-scale').innerHTML = timeScale;


};