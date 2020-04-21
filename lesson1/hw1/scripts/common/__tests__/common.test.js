import { openPopup, closePopup } from '../popup';
import shmoment from '../shmoment';
import { setItem, getItem } from '../storage';
import { getStartOfWeek, generateWeekRange, getDateTime, getDisplayedMonth, createNumbersArray } from '../time.utils';

it('Should open Popup', () => {
    const result = openPopup();
    expect(result).toEqual();
});

it('Should close Popup', () => {
    const result = closePopup();
    expect(result).toEqual();
});
it('Should show the moment', () => {
    const result = shmoment();
    expect(result).toEqual();
});

it('Should set some item', () => {
    const result = setItem();
    expect(result).toEqual();
});

it('Should get some item', () => {
    const result = getItem();
    expect(result).toEqual();
});

it('Should get start of the week', () => {
    const result = getStartOfWeek();
    expect(result).toEqual();
});
it('Should get data of the time', () => {
    const result = getDateTime();
    expect(result).toEqual();
});

it('Should generate week range', () => {
    const result = generateWeekRange();
    expect(result).toEqual();
});

it('Should displayed month', () => {
    const result = getDisplayedMonth();
    expect(result).toEqual();
});

it('Should create numbers array', () => {
    const result = createNumbersArray();
    expect(result).toEqual();
});