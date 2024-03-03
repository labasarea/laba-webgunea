import 'dayjs/locale/eu';

import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(localizedFormat);
dayjs.locale('eu');

export function formatAbbreviatedDate(date: IsoDate) {
  return dayjs(date).format('MMM D, dddd, LT[etan]');
}

export function formatLargeDate(date: IsoDate) {
  return dayjs(date).format('LL, dddd, LT[etan]');
}
