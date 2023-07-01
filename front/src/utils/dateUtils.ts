import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

export const datesUtils = {
  getDate,
  getHour,
};

function getDate(rawDate: string): Date {
  return dayjs(rawDate).toDate();
}

function getHour(date: Date): string {
  return dayjs(date).format('H:mm');
}
