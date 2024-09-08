import { calculateDifferenceBetweenDateAndNow } from './helpers';
import { getDateValue } from './UI';
import { setDifferenceValue } from './UI';

export function calculateDifference(event) {
    event.preventDefault();
    const date = getDateValue();
    const difference = calculateDifferenceBetweenDateAndNow(date);
    setDifferenceValue(difference);
}
