let a = 5;
let b = 8;

console.log(a > b);
console.log(a < b);

if (a > b) {
    console.log(`${a} is more than ${b}!`);
} else {
    console.log(`Wow, surprisingly ${b} is more than ${a}`);
}

// При сравнении значения будут приводиться к Number
console.log('5' == 5);
console.log('5' > 3);
console.log('5' < 4);

//Но это именно при сравнении! Например, Boolean приводит 0 к False, а '0' к true (типа не пустая строка).
// В этот момент происходит магия
a = 0;
b = '0';

console.log(a == b); //При приведении к Number значения этих переменных равны
console.log(Boolean(a)); //При приведении к Boolean a == false, b == true
console.log(Boolean(b));

//А еще такое сравнение считает 0 и false одним и тем же
console.log(0 == false);

// Поэтому такое сравнение называют «нестрогим» (оно и вправду совсем не строгое)

////////////////////////////////////

// Существует «строгое сравнение». Оно обозначается '===' и строго проверяет соответствие типов
// Ну и не забываем про «нестрогое» и «строгое» неравенства '!=' и '!=='
a = 0;
b = '0';

console.log(a === b); //false
console.log(0 === false); //false
console.log(a === 0); //true
console.log(b === '0'); //true

//Как всегда прекрасная магия с null и undefined:
//При нестрогом равенстве они равны друг другу и не равны больше ничему
//При строгом равенстве они не равны друг другу
//НО! При использовании математических операндов и ДРУГИХ операндов сравнения null и undefined приводятся к 0 и NaN соответсвенно.

console.log(null == null); //true
console.log(undefined == undefined); //true
console.log(null == undefined); //true

console.log(null === null); //true
console.log(undefined === undefined); //true
console.log(null === undefined); //false

console.log(null == 0); //false
console.log(null > 0); //false
console.log(null < 0); //false
console.log(null >= 0); //true
console.log(null <= 0); //true

// При любом сравнении с undefined всегда получаем false. Кроме нестрогого сравнения с null
console.log(undefined == null); //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false
console.log(undefined >= 0); //false
console.log(undefined <= 0); //false

console.log(Number(null)); //0
console.log(Number(undefined)); //NaN

5 > 4; // true
'ананас' > 'яблоко'; // false
'2' > '12'; //true
undefined == null; //true
undefined === null; //false
null == '\n0\n'; //false
null === +'\n0\n'; //false

console.log(NaN === NaN);
console.log('21' > '3');


console.log()