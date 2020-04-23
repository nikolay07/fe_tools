import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.iterator";
import "core-js/modules/es.array.concat";
import "core-js/modules/es.array.from";
import "core-js/modules/es.array.iterator";
import "core-js/modules/es.array.slice";
import "core-js/modules/es.function.name";
import "core-js/modules/es.number.constructor";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.exec";
import "core-js/modules/es.regexp.to-string";
import "core-js/modules/es.string.iterator";
import "core-js/modules/es.string.split";
import "core-js/modules/web.dom-collections.iterator";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import shmoment from './shmoment.js'; // вернет дату понедельника той недели, в которую входит переданный день

export var getStartOfWeek = function getStartOfWeek(date) {
  var dateCopy = new Date(date);
  var dayOfWeek = dateCopy.getDay();
  var difference = dayOfWeek === 0 ? -6 // for Sunday
  : 1 - dayOfWeek;
  var monday = new Date(dateCopy.setDate(date.getDate() + difference));
  return new Date(monday.getFullYear(), monday.getMonth(), monday.getDate());
}; // вернет массив из 7 дней, начиная и переданной даты

export var generateWeekRange = function generateWeekRange(startDate) {
  var result = [];

  for (var i = 0; i < 7; i += 1) {
    var base = new Date(startDate);
    result.push(new Date(base.setDate(base.getDate() + i)));
  }

  return result;
}; // вернет объект даты по переданной дате '2000-01-01' и времени '21:00'

export var getDateTime = function getDateTime(date, time) {
  var _time$split = time.split(':'),
      _time$split2 = _slicedToArray(_time$split, 2),
      hours = _time$split2[0],
      minutes = _time$split2[1];

  var withHours = new Date(new Date(date).setHours(Number(hours)));
  var withMinutes = new Date(new Date(withHours).setMinutes(Number(minutes)));
  return withMinutes;
};
var monthsNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']; // вернет месяц и год для недели, в которой находится переданный день

export var getDisplayedMonth = function getDisplayedMonth(date) {
  var weekStart = getStartOfWeek(date);
  var weekEnd = shmoment(date).add('days', 6).result();
  var startMonth = weekStart.getMonth();
  var startYear = weekStart.getFullYear();
  var endMonth = weekEnd.getMonth();
  var endYear = weekEnd.getFullYear();
  var isSameMonth = startMonth === endMonth;

  if (isSameMonth) {
    return "".concat(monthsNames[startMonth], " ").concat(startYear);
  }

  var isSameYear = startYear === endYear;
  return isSameYear ? "".concat(monthsNames[startMonth], " - ").concat(monthsNames[endMonth], " ").concat(startYear) : "".concat(monthsNames[startMonth], " ").concat(startYear, " - ").concat(monthsNames[endMonth], " ").concat(endYear);
};
export var createNumbersArray = function createNumbersArray(from, to) {
  // ф-ция должна генерировать массив целых чисел в указанном промежутке
  var result = [];

  for (var i = from; i <= to; i++) {
    result.push(i);
  }

  return result;
};