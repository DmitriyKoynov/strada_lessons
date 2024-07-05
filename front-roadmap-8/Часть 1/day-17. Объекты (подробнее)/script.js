const object_a = {
    a: 1,
    b: 2
};

// Можно обратиться к свойству функции через значение переменной, используя скобочную нотацию
let letter = 'b';
console.log(object_a['b']); // 2
console.log(object_a[letter]); // 2

// С помощью скобочной нотации можно создать метод, который добавляет новую запись в объект
object_a.add = function (key, value) {
    this[key] = value;
};
object_a.delete = function (key) {
    delete this[key];
};
console.log(object_a); // {a: 1, b: 2, add: ƒ, delete: ƒ}
object_a.add('c', 45);
object_a.delete('b');
console.log(object_a); // {a: 1, add: ƒ, delete: ƒ, c: 45}

// Если мы хотим проверить наличие свойства у объекта, то простая проверка на true/false не подойдет
if (object_a.a) console.log('Свойство существует!');
object_a.a = undefined; // {a: undefined, add: ƒ, delete: ƒ, c: 45}
if (object_a.a) console.log('Свойство существует!'); // Не сработает, потому что undefined превратится в false

// Поэтому придумали декларативный способ проверки наличия свойства с помощью оператора «in»
if ('a' in object_a) console.log('Проверили наличие свойства «a» с помощью оператора «in»');

// А теперь рассмотрим перебор всех свойств объекта
const phoneBook = {
    list: {
        John: 123456789,
        'Jane Doe': 987654321,
        'Jim Smith': 111111111
    }
};

// С помощью цикла for...in можно обратиться последовательно ко всем свойствам объекта
for (const name in phoneBook.list) {
    console.log(`${name}: ${phoneBook.list[name]}`);
}

// Кстати, теперь становится понятно, почему свойства объекта лучше хранить отдельно от методов:
// Если мы добавим в list метод show, то при прохождении for...in мы выведем имя метода и сам метод
phoneBook.list.show = function (name) {
    console.log(this[name]);
};

// John: 123456789
// Jane Doe: 987654321
// Jim Smith: 111111111
// show: function (name) {
//     console.log(this[name]);
// }
for (const name in phoneBook.list) {
    console.log(`${name}: ${phoneBook.list[name]}`);
}

// А вот так можно избежать косячного вывода
for (const name in phoneBook.list) {
    if (typeof phoneBook.list[name] !== 'function') console.log(`${name}: ${phoneBook.list[name]}`);
}

//Проверим, как выводятся свойства объекта в зависимости от имени ключа
const object_outputOrderTest_1 = {
    list: {
        b: 3,
        a: 1,
        c: 2,
        d: 4,
        e: 'text',
        f: 5,
        g: 'atex'
    }
};

for (const key in object_outputOrderTest_1.list) {
    console.log(`${key}: ${object_outputOrderTest_1.list[key]}`); // Порядок не зависит от значения ключей и никак не меняется, если ключи являются строками
}

const object_outputOrderTest_2 = {
    list: {
        1: 'a',
        3: 'b',
        2: 'c',
        4: 'd',
        text: 'e',
        5: 'f',
        atex: 'g'
    }
};
for (const key in object_outputOrderTest_2.list) {
    console.log(`${key}: ${object_outputOrderTest_2.list[key]}`); // Но вот целочисленные ключи выстраиваются первыми по возрастанию, а за ними идут строковые, которые выстраиваются в порядке создания (кстати, каждый ключ, видимо, пытается быть приведённым к number)
}

console.log(object_outputOrderTest_2.list); // И даже вот тут будут выведены сперва целочисленные ключи, а потом строчные
// {1: 'a', 2: 'c', 3: 'b', 4: 'd', 5: 'f', text: 'e', atex: 'g'}

// Короткая запись
// Мы можем сразу создать свойство ключ-значение, если передать имя инициализированной переменной/константы
const a = 8;
const Pete = 'Pete';
let Mitya;
const list = {
    a,
    Pete,
    Mitya
};
console.log(list); // {a: 8, Pete: 'Pete', Mitya: undefined}

// А еще таким же образом мы можем передать внутрь объекта другой объект
const newList = { list };
console.log(newList); // {list: {…}}
console.log(newList.list); // {a: 8, Pete: 'Pete', Mitya: undefined}

// После создания объекта таким образом свойства отвязываются от констант/переменных. И значения свойств можно менять, если они были константами например
list.a = 9;
console.log(list.a); // 9
console.log(a); // 8
