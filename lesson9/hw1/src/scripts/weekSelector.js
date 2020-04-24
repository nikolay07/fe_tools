import { initCalendar } from './inititalCalendarData';
import { renderNavbar } from './renderNavbar';
import { renderCalendar } from './renderCalendar';
import { renderHeaderText } from './renderHeader';

export const changeWeek = (event) => {
  const direction = event.target.parentElement.dataset.direction === 'true';
  initCalendar.switchWeek(direction);
  renderNavbar();
  renderCalendar();
  renderHeaderText();
};
