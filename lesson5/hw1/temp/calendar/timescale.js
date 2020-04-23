import "core-js/modules/es.array.concat";
import "core-js/modules/es.array.join";
import "core-js/modules/es.array.map";
import { createNumbersArray } from '../common/time.utils.js';
export var renderTimescale = function renderTimescale() {
  // ф-ция должна генерировать разметку для боковой шкалы времени (24 часа)
  // полученную разметку вставьте на страницу с помощью innerHTML
  var timeScale = createNumbersArray(0, 23).map(function (elem) {
    var time = "".concat(elem < 10 ? "0" + elem : elem, ":00");
    return "<div class=\"calendar__time-scale_hours\" id=\"".concat(time, "\">").concat(time, "</div>");
  }).join('');
  document.querySelector('.calendar__time-scale').innerHTML = timeScale;
};