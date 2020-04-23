import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.array.concat";
import { getItem, setItem } from '../common/storage.js';
import shmoment from '../common/shmoment.js';
import { openPopup, closePopup } from '../common/popup.js';
var weekElem = document.querySelector('.calendar__week');
var deleteEventBtn = document.querySelector('.delete-event-btn');

function handleEventClick(event) {
  console.log(event); // если произощел клик по событию, то нужно паказать попап с кнопкой удаления
}

function removeEventsFromCalendar() {// ф-ция для удаления всех событий с календаря
}

var createEventElement = function createEventElement(event) {
  // ф-ция создает DOM элемент события
  // событие должно позиционироваться абсолютно внутри нудной ячейки времени внутри дня
  // полезно будет добавить id события в дата атрибут
  var id = event.id,
      title = event.title,
      description = event.description,
      start = event.start,
      end = event.end;
  var eventId = event[id];
  var eventTitle = event[title];
  var eventDescription = event[description];
  var eventStart = event[start];
  var eventEnd = event[end];
  var domElement = document.createElement('div');
  var currentEvent = "<div data-event-id=".concat(eventId, ">\n                            <div class=\"event__title\">").concat(eventTitle, "</div>\n                            <div class=\"event__description\">").concat(eventDescription, "</div>\n                            <div class=\"event__time\">\"").concat(eventStart, " - ").concat(eventEnd, "\"</div>\n                          </div>");
  domElement.innerHTML = currentEvent;
  return domElement;
};

export var renderEvents = function renderEvents() {// выбираем события для отображаемой недели
  // создаем для них DOM элементы
  // для каждого события находим на странице временную ячейку (.calendar__time-slot)
  // и вставляем туда событие
  // каждый день и временная ячейка должно содержать дата атрибуты, по которым можно будет найти нужную временную ячейку для события
  // не забудьте удалить с календаря старые события перед добавлением новых
};

function onDeleteEvent() {// удалить событие в массиве в storage
  // закрыть попап
  // перерисовать события на странице в соответствии с новым списком событий в storage
}

deleteEventBtn.addEventListener('click', onDeleteEvent);
weekElem.addEventListener('click', handleEventClick);