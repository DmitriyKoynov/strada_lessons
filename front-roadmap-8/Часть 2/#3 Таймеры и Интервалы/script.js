// const showName = name => {
//     console.log(`Ваше имя — ${name}`);
// };

// const secondTimedOutFunc = () => {
//     console.log('Я должен идти раньше!');
// };

// setTimeout(showName, 1000); // Отложит выполнение на 1 сек
// setTimeout(secondTimedOutFunc); // Выполнится сразу после синхронного кода
// console.log('Ei, nane-nane!'); // Выполнится раньше всех, потому что остальные запустятся в асинхронном потоке

// // Можно не выполнять таймаут ,если очистить его! Сама по себе функция setTimeout() возвращает id этого таймаута
// let timeOutId = setTimeout(() => {
//     console.log('23');
// });

// clearTimeout(timeOutId);

// // Можно вызвать таймаут внутри таймаута!
// setTimeout(function () {
//     console.log('привет первый!');

//     setTimeout(function () {
//         console.log('привет второй!');
//     }, 2000);
// }, 1000);

// // Интервалы бесконечно запускают кусок кода через определенные промежутки времени
// function hello() {
//     console.log('привет');
// }
// setInterval(hello, 2000);

// function countdownTimeout(count) {
//     for (let index = 0; index < count; index++) {
//         setTimeout(() => {
//             console.log(`Осталось ${count - index} секунд`);
//         }, 1000);
//     }
//     setTimeout(() => {
//         console.log(`Осталось ${count - index} секунд`);
//     }, 1000);
// }
// countdownTimeout(10);

// function countdownOnTimeout2(count) {
//     for (let index = 0; index < count; index++) {
//         setTimeout(() => {
//             console.log(count - index);
//         }, index * 1000);
//     }
//     setTimeout(() => {
//         console.log('Время вышло!');
//     }, count * 1000);
// }
// countdownOnTimeout2(5);

// function countdownOnTimeout3(count) {
//     if (count === 0) {
//         console.log('Время вышло!');
//         return;
//     }
//     console.log(count);
//     setTimeout(countdownOnTimeout3, 1000, --count);
// }
// countdownOnTimeout3(5);

// function countdownOnInterval(count) {
//     let intervalId = setInterval(() => {
//         if (count === 0) {
//             clearInterval(intervalId);
//             console.log('Время вышло!');
//             return;
//         }
//         console.log(count--);
//     }, 1000);
// }
// countdownOnInterval(5);

function countdown(count) {
    if (count === 0) {
        console.log('Время вышло!');
        return;
    }
    console.log(count);
    let timeout = 1000;
    setTimeout(() => {
        countdown(--count);
    }, timeout);
}

countdown(5);
