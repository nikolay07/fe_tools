import { initCalendar } from './scripts/inititalCalendarData.js';
import { getReminders, getDefaultColor } from './scripts/gateWay.js';
import { getStorage, setStorage, setStorageDefaultColor, getStorageDefaultColor } from './scripts/storage.js';
import { renderPopUpForm } from './scripts/renderPopUp.js';
import { renderNavbar } from './scripts/renderNavbar.js';
import { renderCalendar, initCalendarEditListeners } from './scripts/renderCalendar.js';
import { renderSideBar } from './scripts/renderSideBar.js';
import { renderHeaderText, initHeaderEventListeners } from './scripts/renderHeader.js';
import { initSettingsModalListeners } from './scripts/settingsModal.js';
import { renderLoader, hideLoader } from './scripts/renderLoader.js';
import "./index.scss";

document.addEventListener('DOMContentLoaded', () => {
    renderLoader()
    getReminders()
        .then(data => {
            setStorage(data);
            getStorage()
            initCalendar.getMonday();
            renderHeaderText();
            initHeaderEventListeners();
            renderNavbar();
            renderSideBar();
            renderPopUpForm();
            renderCalendar();
            setInterval(renderCalendar, 60000);
            initCalendarEditListeners()
            initSettingsModalListeners();

            (function () {
                const currentTimeLine = document.querySelector('.day-column__current-time-line');
                currentTimeLine.scrollIntoView({ block: "center", behavior: "smooth" });
            })()
        })
    getDefaultColor()
        .then(data => {
            if (data[0].defaultColor) {
                setStorageDefaultColor(data[0].defaultColor);
                getStorageDefaultColor();
                hideLoader();
            }
        })
})

const onStorageChange = (e) => {
    getStorage();
    renderCalendar();
}

window.addEventListener('storage', onStorageChange)