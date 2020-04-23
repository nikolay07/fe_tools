var storage = {
  // объект в котором должен храниться массив событий и дату понедельника отображаемой недели
  // еще понадобится хранить selectedEventId для того, чтобы показать попап с кнопкой удаления
  // другие данные хранить не нужно. Все, что необходимо для работы приложения можно посчитать
  thisWeekEvents: function thisWeekEvents() {
    var time = this.start;
    var newTime = time.getDate();
  }
};
export var setItem = function setItem(key, value) {
  // ф-ция должна устанавливать значения в объект storage
  storage[key] = value;
};
export var getItem = function getItem(key) {
  // ф-ция должна возвращать по ключу значения из объекта storage
  return storage[key];
}; // пример объекта события

var eventExample = {
  id: 0.7520027086457333,
  // id понадобится для работы с событиями
  title: 'Title',
  description: 'dddd',
  start: new Date('2020-03-17T01:10:00.000Z'),
  end: new Date('2020-03-17T04:30:00.000Z')
};