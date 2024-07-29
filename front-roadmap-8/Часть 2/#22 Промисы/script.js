// let promise = new Promise((resolve, reject) => {
//     let age = 0;
//     setTimeout(() => {
//         age = Math.round(Math.random() * 100);
//         if (age >= 50) {
//             resolve({ name: 'Петя', age: age });
//         } else {
//             reject('123');
//         }
//     }, 300);
// });
// promise.then(
//     result => console.log(result),
//     error => console.error(error)
// );
// promise.finally(() => console.log('Это финали!'));

new Promise(resolve => resolve(1))
    .then(result => new Promise(resolve => resolve(result + 7)))
    .then(result => result * 2)
    .then(result => console.log(result));
