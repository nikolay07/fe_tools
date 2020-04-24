import { initCalendar } from './inititalCalendarData';
import { setStorageDefaultColor, getStorageDefaultColor } from './storage';
import { renderLoader, hideLoader } from './renderLoader';
import { updateDefaultColor } from './gateWay';


const colorBaseInput = document.getElementById('base-color');
const settingsModal = document.querySelector('.header__settings-modal');
const settingsButton = document.querySelector('.header__settings-actions');
const closeSettingsBtn = document.querySelector('.header__close-modal-btn');
const saveSettingsBtn = document.querySelector('.header__submit-btn');

const onSettingsClick = (e) => {
  settingsModal.setAttribute('style', 'visibility: visible;');
  colorBaseInput.value = initCalendar.itemColor;
};

const onCloseModalBtn = (e) => {
  // if (e.target.id === 'close-modal-btn') {
    settingsModal.setAttribute('style', 'visibility: hidden;');
  // }
};

const onSaveSettingsClick = (e) => {
  e.preventDefault();
  renderLoader();
  const newDefaultColor = {
    defaultColor: colorBaseInput.value,
  };
  updateDefaultColor(newDefaultColor)
    .then((data) => {
      setStorageDefaultColor(data.defaultColor);
      getStorageDefaultColor();
      hideLoader();
      settingsModal.setAttribute('style', 'visibility: hidden;');
    });
};

export const initSettingsModalListeners = () => {
  closeSettingsBtn.addEventListener('click', onCloseModalBtn);
  settingsButton.addEventListener('click', onSettingsClick);
  saveSettingsBtn.addEventListener('click', onSaveSettingsClick);
};
