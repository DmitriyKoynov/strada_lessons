// Если какая-то функция планируется быть использованной в качестве метода нескольких объектов, то можно вынести её «снаружи» и заиспользовать this для передачи контекста. Ведь, если заиспользовать имя ссылки на объект, то даже если мы вызовем этот метод через объект с другой ссылкой, мы будем воздействовать на первый объект (криво описал, но на самом деле там всё просто). Лучше расскажу в коде
const obj_a = {
    a: 1,
    b: 2,
    sum,
    sumAdvanced
};
const obj_b = {
    a: 4,
    b: 5,
    sum,
    sumAdvanced
};
function sum() {
    let result = 0;
    for (const key in obj_a) {
        if (typeof obj_a[key] !== 'function') result += obj_a[key];
    }
    return result;
}
// Обе консоли выведут 3. Потому что мы завязались на контекст obj_a
console.log(obj_a.sum());
console.log(obj_b.sum());

function sumAdvanced() {
    let result = 0;
    for (const key in this) {
        if (typeof this[key] !== 'function') result += this[key];
    }
    return result;
}
// А вот тут каждая консоль выведет сумму своего объекта, потому что метод использует контекст объекта, в котором он был вызван
console.log(obj_a.sumAdvanced());
console.log(obj_b.sumAdvanced());

////////////// Стрелочные функции
// Cтрелочные функции «arrow functions» отличаются от «function declaration» краткостью записи

// Следующие 2 записи как бы одинаковые
function sumDeclaration(a, b) {
    return a + b;
}
const sumArrow = (a, b) => a + b;

// Но, это именно, что как бы. Стрелочная функция запоминает контекст места, где она была проинициализирована + в коде она может быть вызвана только после своей инициализации.
