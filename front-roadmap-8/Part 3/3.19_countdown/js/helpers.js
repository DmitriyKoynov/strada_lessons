import { intervalToDuration, formatDuration } from 'date-fns';
import { ru } from 'date-fns/locale/ru';

export function calculateDifferenceBetweenDateAndNow(date) {
    const interval = intervalToDuration({
        start: new Date(),
        end: date,
    });
    return formatDuration(interval, {
        format: ['years', 'months', 'days', 'hours', 'minutes'],
        locale: ru,
    });
}
