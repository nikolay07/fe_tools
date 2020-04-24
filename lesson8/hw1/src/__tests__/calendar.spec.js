import { getDuration, getMinutesStart } from '../scripts/renderCalendar'


it('Dutation of reminder from 1:30 till 2:30 should return 60', () => {
    expect(getDuration("02:30", "01:30")).toEqual(60);
});
it('Dutation of reminder from 0:30 till 2:30 should return 120', () => {
    expect(getDuration("02:30", "00:30")).toEqual(120);
});

it('If 2:30 should return 30', () => {
    expect(getMinutesStart("02:30")).toEqual("30");
});
