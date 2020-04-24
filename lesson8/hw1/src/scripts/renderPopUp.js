import { initCalendar } from './inititalCalendarData.js';
import { setStorage, getStorage } from './storage.js';
import { renderLoader, hideLoader } from './renderLoader.js';
import { renderCalendar } from './renderCalendar.js';
import { postReminder, updateReminder, deleteReminder } from './gateWay.js';

// Render Pop Up Form
const popUp = document.querySelector('.pop-up-form');
export const showPopUpForm = () => popUp.setAttribute("style", "visibility: visible;")
export const hidePopUpForm = () => popUp.setAttribute("style", "visibility: hidden;");

// Reset Pop Up form
const deleteBtn = document.querySelector(".calendar-issues-form__delete-btn")
const colorItemInput = document.getElementById("item-color");

export const resetPopUpForm = () => {
    title.value = null;
    date.value = null;
    startTime.value = null;
    finishTime.value = null;
    description.value = null;
    initCalendar.id = null;
    deleteBtn.disabled = true;
    initCalendar.editMode = false;
    colorItemInput.value = initCalendar.itemColor;
}

export const renderPopUpForm = () => {

    // Delete reminder from calendar  
    const onDelete = () => {
        renderLoader()
        deleteReminder(initCalendar.id)
            .then(() => {
                const getIndexOfElement = getStorage().findIndex(element => element.id == initCalendar.id);
                let newArr = [...getStorage()]
                newArr.splice(getIndexOfElement, 1);
                setStorage(newArr);
                resetPopUpForm();
                hidePopUpForm()
                renderCalendar();
                hideLoader();
            })
    }
    deleteBtn.addEventListener('click', onDelete)
    const closePopUpBtn = document.querySelector('.pop-up-form__close-btn');

    //Close pop up form

    const onCloseBtn = () => {
        hidePopUpForm();
        resetPopUpForm();
    };
    closePopUpBtn.addEventListener('click', onCloseBtn);
    const popUpForm = document.querySelector(".calendar-issues-form");

    // Submitin new reminder or edit current
    const onSubmit = e => {
        e.preventDefault();
        renderLoader();
        const newReminderData = {
            title: title.value,
            date: date.value,
            startTime: startTime.value,
            finishTime: finishTime.value,
            description: description.value,
            itemColor: colorItemInput.value,
        }
        // Eidt reminder current
        if (initCalendar.editMode) {
            updateReminder(newReminderData, initCalendar.id)
                .then(data => {
                    let indexOfEditingReminder = getStorage().findIndex(item => item.id == initCalendar.id);
                    let newArr = [...getStorage()]
                    newArr[indexOfEditingReminder] = { ...data };
                    setStorage(newArr);
                    resetPopUpForm();
                    hidePopUpForm();
                    renderCalendar();
                    hideLoader();
                })
        } else {
            postReminder(newReminderData)
                .then(data => {
                    let newArr = [...getStorage()]
                    newArr.push(data);
                    setStorage(newArr);
                    resetPopUpForm();
                    hidePopUpForm();
                    renderCalendar();
                    hideLoader();
                })
        }
    }
    popUpForm.addEventListener("submit", onSubmit)
}
