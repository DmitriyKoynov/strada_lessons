export function add(a, b) {
    return a + b;
}
export function multi(a, b) {
    return a * b;
}
export function subtract(a, b) {
    return a - b;
}
export function div(a, b) {
    return a / b;
}

export function checkOperation(operation) {
    return (
        operation.name === 'add' ||
        operation.name === 'multi' ||
        operation.name === 'subtract' ||
        operation.name === 'div'
    );
}

export function checkOperands(a, b) {
    return typeof a === 'number' && typeof b === 'number';
}
