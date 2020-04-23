import "core-js/modules/es.array.concat";
import "core-js/modules/es.array.join";
import "core-js/modules/es.array.map";
import { getItem } from '../common/storage.js';
import { generateWeekRange, createNumbersArray } from '../common/time.utils.js';
import { renderEvents } from '../events/events.js';
var week = document.querySelector('.calendar__week');

var generateDay = function generateDay() {
  // функция должна сгенерировать и вернуть разметку недели в виде строки
  // разметка состоит из 24 часовых временных слотов (.calendar__time-slot)
  var time = createNumbersArray(0, 23).map(function (elem) {
    return "<div class=\"calendar__time-slot\" data-time=\"".concat(elem, "\"></div>");
  }).join('');
  return time;
};

export var renderWeek = function renderWeek() {
  // функция должна сгенерировать разметку недели в виде строки и вставить ее на страницу (в .calendar__week)
  // разметка недели состоит из 7 дней (.calendar__day) отображаемой недели
  // каждый день должен содержать в дата атрибуте порядковый номер для в месяце
  // какую неделю отображать - берем из storage
  // после того, как отрисовали всю сетку для отображаемой недели - добавляем события методом renderEvents
  var days = createNumbersArray(1, 7).map(function (elem) {
    return "<div class=\"calendar__day\" data-day=\"".concat(elem, "\">\n                            ").concat(generateDay(), "\n                    </div>");
  }).join('');
  week.innerHTML = days;
};