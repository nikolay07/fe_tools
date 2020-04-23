var getMethodsNames = {
  years: 'getFullYear',
  months: 'getMonth',
  days: 'getDate',
  hours: 'getHours',
  minutes: 'getMinutes',
  seconds: 'getSeconds',
  milliseconds: 'getMilliseconds'
};
var setMethodsNames = {
  years: 'setFullYear',
  months: 'setMonth',
  days: 'setDate',
  hours: 'setHours',
  minutes: 'setMinutes',
  seconds: 'setSeconds',
  milliseconds: 'setMilliseconds'
}; // ф-ция помогает добавить или отнять определенное количество времени от заданного
// урпощенный аналог популярной библиотеки moment

var shmoment = function shmoment(date) {
  var _result = new Date(date);

  var calculator = {
    add: function add(units, value) {
      var currentUnitValue = _result[getMethodsNames[units]]();

      _result = new Date(_result[setMethodsNames[units]](currentUnitValue + value));
      return this;
    },
    subtract: function subtract(units, value) {
      return this.add(units, -value);
    },
    result: function result() {
      return _result;
    }
  };
  return calculator;
};

export default shmoment;