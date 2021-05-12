import { isWeekend } from 'date-fns';
import { addDays, isFriday, isDate, isSaturday } from 'date-fns/esm';

function addUtilDays(date, days, onlyOnFinal) {
  if (!isDate(date)) {
    throw new TypeError('Date param must be a date');
  }
  let addDaysDate = date;

  if (onlyOnFinal) {
    let addedDays = addDays(date, days);

    if (isWeekend(addedDays)) {
      const additionals = isSaturday(addedDays) ? 2 : 1;
      addedDays = addDays(addedDays, additionals);
    }

    return addedDays;
  }

  for (let i = 1; i < days; i++) {
    if (isFriday(addDaysDate)) {
      addDaysDate = addDays(addDaysDate, 2);
    }
    addDaysDate = addDays(addDaysDate, 1);
  }

  return addDaysDate;
}

export default addUtilDays;
