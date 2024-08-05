let a = 1;
let b = 2;
let c = 'asdasda';
function add() {
    return this.a + this.b;
}
let f = { a, b, c, add };

console.log(f);
console.log(f.add());

const array = [1, 2, 3, 4, 5, 'asda', 'gdfgd'];
console.log(array.some(element => element === 6));
