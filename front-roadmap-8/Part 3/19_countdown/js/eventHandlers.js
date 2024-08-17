import { calculateDifferenceBetweenDateAndNow } from './helpers';
import { getDateValueFromForm } from './UI';
import { setTimeValue } from './UI';

export function calculateDifference(event) {
    event.preventDefault();
    const date = getDateValueFromForm();
    const difference = calculateDifferenceBetweenDateAndNow(date);
    setTimeValue(difference);
}
