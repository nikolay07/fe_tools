import "core-js/modules/es.array.concat";
import "core-js/modules/es.array.join";
import "core-js/modules/es.array.map";
import { getItem } from '../common/storage.js';
import { generateWeekRange } from '../common/time.utils.js';
import { createNumbersArray } from '../common/time.utils.js'; //import { openModal } from '../common/modal.js';

var daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
export var renderHeader = function renderHeader() {
  // функция должна сгенерировать разметку c днями отображаемой недели (только день недели и число в месяце)
  // полученную разметку вставить на страницу с помощью innerHTML
  // в дата атрибуте каждой ячейки должно хранить для какого часа эта ячейка
  var header = document.querySelector('.calendar__header');
  var days = document.createElement('div');
  days.classList.add('days');
  var day = createNumbersArray(0, 6).map(function (elem) {
    var firstDayOfWeek = getItem('displayedWeekStart');
    return "<div class=\"calendar__header-day\" data-day=\"".concat(elem, "\">\n                        ").concat(daysOfWeek[elem].toUpperCase(), "\n                            <div class=\"calendar__header-number\" data-number=\" ").concat(generateWeekRange(firstDayOfWeek)[elem].getDate(), "\">\n                                ").concat(generateWeekRange(firstDayOfWeek)[elem].getDate(), "\n                            </div>\n                    </div>");
  }).join('');
  header.innerHTML = "<div class=\"calendar__time-scale_grinvich\">GMT+02</div>";
  header.innerHTML += day;
};
renderHeader(); // при клике на кнопку "Create" открыть модальное окно с формой для создания события