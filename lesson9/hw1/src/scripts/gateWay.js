import { renderError } from './erroPopUp';

const baseLink = 'https://5e4ebaa86272aa0014230ec4.mockapi.io/Calendar';
const defaultColorLink = 'https://5e4ebaa86272aa0014230ec4.mockapi.io/calendarInitColor';

// Reminders items REST scripts

export const getReminders = () => fetch(baseLink).then((response) => {
  if (response.ok) {
    return response.json();
  }
  throw new Error('Loading data failed');
})
  .catch((error) => {
    renderError(error);
  });

export const postReminder = (reminderData) => fetch(baseLink, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(reminderData),
}).then((response) => {
  if (response.ok) {
    return response.json();
  }
  throw new Error('Loading data failed');
})
  .catch((error) => {
    renderError(error);
  });

export const updateReminder = (reminderData, reminderId) => fetch(`${baseLink}/${reminderId}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(reminderData),
}).then((response) => {
  if (response.ok) {
    return response.json();
  }
  throw new Error('Loading data failed');
})
  .catch((error) => {
    renderError(error);
  });

export const deleteReminder = (reminderId) => fetch(`${baseLink}/${reminderId}`, {
  method: 'DELETE',
}).then((response) => {
  if (response.ok) {
    return response.json();
  }
  throw new Error('Loading data failed');
})
  .catch((error) => {
    renderError(error);
  });

// Default color REST scripts

export const getDefaultColor = () => fetch(defaultColorLink).then((response) => {
  if (response.ok) {
    return response.json();
  }
  throw new Error('Loading init calendar color failed');
})
  .catch((error) => {
    renderError(error);
  });

export const updateDefaultColor = (newDefaultColor) => fetch(`${defaultColorLink}/1`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(newDefaultColor),
}).then((response) => {
  if (response.ok) {
    return response.json();
  }
  throw new Error('Loading init calendar color failed');
})
  .catch((error) => {
    renderError(error);
  });
