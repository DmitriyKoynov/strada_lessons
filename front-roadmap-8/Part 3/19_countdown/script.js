import { UI } from './js/UI';
import { calculateDifference } from './js/eventHandlers';

UI.form.addEventListener('submit', calculateDifference);
