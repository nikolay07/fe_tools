import { getItem, setItem } from '../common/storage.js';
import shmoment from '../common/shmoment.js';
import { openPopup, closePopup } from '../common/popup.js';

const weekElem = document.querySelector('.calendar__week');
const deleteEventBtn = document.querySelector('.delete-event-btn');

function handleEventClick(event) {
    console.log(event);
    // если произощел клик по событию, то нужно паказать попап с кнопкой удаления
}

function removeEventsFromCalendar() {
    // ф-ция для удаления всех событий с календаря
}

const createEventElement = event => {
    // ф-ция создает DOM элемент события
    // событие должно позиционироваться абсолютно внутри нудной ячейки времени внутри дня
    // полезно будет добавить id события в дата атрибут
    const { id, title, description, start, end } = event;
    const eventId = event[id];
    const eventTitle = event[title];
    const eventDescription = event[description];
    const eventStart = event[start];
    const eventEnd = event[end];
    const domElement = document.createElement('div');
    const currentEvent = `<div data-event-id=${eventId}>
                            <div class="event__title">${eventTitle}</div>
                            <div class="event__description">${eventDescription}</div>
                            <div class="event__time">"${eventStart} - ${eventEnd}"</div>
                          </div>`;
    domElement.innerHTML = currentEvent;
    return domElement;


};

export const renderEvents = () => {
    // выбираем события для отображаемой недели
    // создаем для них DOM элементы
    // для каждого события находим на странице временную ячейку (.calendar__time-slot)
    // и вставляем туда событие
    // каждый день и временная ячейка должно содержать дата атрибуты, по которым можно будет найти нужную временную ячейку для события
    // не забудьте удалить с календаря старые события перед добавлением новых
};

function onDeleteEvent() {
    // удалить событие в массиве в storage
    // закрыть попап
    // перерисовать события на странице в соответствии с новым списком событий в storage
}

deleteEventBtn.addEventListener('click', onDeleteEvent);

weekElem.addEventListener('click', handleEventClick);