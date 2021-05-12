const generateGoogleCalendarLink = (calendarObj) => {
  const baseUrl = 'https://www.google.com/calendar/render?action=TEMPLATE';
  let finalUrl = baseUrl;

  Object.keys(calendarObj).forEach((key) => {
    if (calendarObj[key] && key !== 'dates') {
      finalUrl = `${finalUrl}&${key}=${encodeURIComponent(calendarObj[key])}`;
    } else if (calendarObj[key] && key === 'dates') {
      if (calendarObj[key].start && calendarObj[key].end) {
        finalUrl = `${finalUrl}&${key}=${calendarObj[key].start}%2F${calendarObj[key].end}`;
      }
    }
  });

  return finalUrl;
};

module.exports = generateGoogleCalendarLink