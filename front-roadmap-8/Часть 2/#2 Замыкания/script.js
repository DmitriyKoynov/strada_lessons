function createCounter() {
    let counter = 1;
    return () => counter++;
}

let counterA = createCounter();
let counterB = createCounter();

console.log(counterA()); // 1
console.log(counterA()); // 2
console.log(counterA()); // 3

console.log(counterB()); // 1

// Ура! Я сделал задание из собеса самостоятельно примерно за 10 минут! Правда, мне помогло то, что уже были вызовы...
// Вощем, замыкание — это когда функция «запоминает и захватывает» состояние переменных в том пространстве, где она была создана. После этого она может продолжить работать с этими состояниями, храня их значение в какой-то магической коробке, куда есть доступ только у неё!

// Область видимости — ограничение видимости локальных функций. Т.е. внешние чуваки не могут «заглянуть» внутрь локальной области какой-либо функции. А вот сами функции могут «смотреть» на внешних чуваков и даже менять их «значения»

let number = 28;
const someFunction = () => {
    let anotherNumber = 100;
    number++;
    console.log(number); // 29
};
someFunction();
// console.log(anotherNumber); // а тут будет ошибка ReferenceError: anotherNumber is not defined

let i = 0;
for (let i = 0; i < 10; i++) {
    console.log(i); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
}
console.log(i); // 0

function counter(startValue = 0) {
    let startValueLocal = startValue;
    return () => ++startValueLocal;
}

let abc = counter(7);
console.log(abc());
console.log(abc());
