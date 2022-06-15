export const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const getDayByName = (date: Date) => {
  const dt = new Date(date);

  return days[dt.getDay()];
};

export const getMonthByName = (date: Date) => {
  const dt = new Date(date);

  return months[dt.getMonth()];
};

export const getFirstAndLastDayOfMonth = (dt: Date) => {
  const date = new Date(dt);
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1, 0, 0, 0, 0);
  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0,
    23,
    59,
    59,
    999,
  );

  return {start: firstDay, end: lastDay};
};
