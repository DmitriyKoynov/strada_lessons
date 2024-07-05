// Прикольно, что с помощью обратных кавычек (те, которые Ё), можно задавать многострочные строки.
// Строки ,заданные с помощью обратных кавычек называются «шаблонными»
console.log(`ываывар
ываываы
ываыв`);

// При этом, при сравнении мы как будто бы добавляем символ переноса \n.
let a = `asd
bca`;
let b = 'asd\nbca';
console.log(a === b); // true

// Интересно, что шаблонные строки можно передавать через специфичный синтаксис func'строка'
console.log`123`;

// ''.length возвращает длину строки
'asd'.length === 3; // true
console.log(`My\n`.length); // 3, потому что \n считается за 1 спецсимвол

// Получить конкретный символ из строки можно с помощью метода .at(n), где n - порядковый номер символа
console.log('abcde'.at(0)); // 'a'
console.log('abcde'.at(1)); // 'b'
console.log('abcde'.at(-1)); // 'e', типа первый с конца, потому что нулевого с конца нету))
console.log('abcde'.at(-2)); // 'd', типа второй с конца

console.log('abcde'[0]); // 'a', можно через квадратные скобки (похоже, на массив), но вот там уже отрицательные числа не прокатят. Придётся исхищряться.
console.log('abcde'['abcde'.length - 1]); // 'e', например, через длину строки)

// Для перебора всех символов внутри строки можно воспользоваться for..of
// for..in выведет порядковый номер сивола
a = 'adfda';
for (const char in a) {
    // Выведет '0', '1', '2', '3', '4'
    console.log(char);
}
for (const char of a) {
    // Выведет 'a', 'd', 'f', 'd', 'a'
    console.log(char);
}

// Строки — охрененные. Их нельзя посивольно изменить после того, как ты их объявил
// Но переменной можно задать другую строку
a = 'abcd';
// a.at(1)='f'; // Ошибка ReferenceError: Invalid left-hand side in assignment
a = 'afcd'; // Всё хорошо
ф = 'b' + a[1] + 'asd'; // Тоже всё хорошо. Получается, что символы строк открыты только на чтение, но не на запись внутрь созданной строки

// Методы перевода в нижний и верхний регистр
a.toLowerCase(); // Вернёт строку в нижнем регистре
a.toUpperCase(); // Вернёт строку в верхнем регистре
console.log(a); // 'afcd' — потому что .toLowerCase() и .toUpperCase() не модифицируют текущую строку, а возвращают новую строку

// str.indexOf(substr, position) — метод вернёт -1, если не найдёт указанную подстроку в строке
// или вернёт порядковый номер элемента строки, с которого начинается искомая подстрока
// необязательный параметр position (по умолчанию === 0) позволяет задать номер элемента, с которого нужна начать поиск (включительно)
a = 'My little My cat';
console.log(a.indexOf('My')); // 0
console.log(a.indexOf('Me')); // -1
console.log(a.indexOf('My', 1)); // 10

// Если хочется вывести все номера символов, которые являются вхождениями, то нужно запускать цикл
a = 'My little My cat';
sub = 'My';
position = -1;
let result = '';
while ((position = a.indexOf(sub, position + 1)) !== -1) {
    result += position + ', ';
}
console.log(result);

console.log(a.lastIndexOf('My')); // 10, потому что lastIndexOf ищет с конца

// str.includes(substr, position) — вернёт true, если в строке найдена подстрока. И false, если её там нет.
// position опять же является необязательным
let str = 'My little My cat';
console.log(str.includes('li')); // true
console.log(str.includes('li', 4)); // false

// Методы str.startsWith(substr, position) и str.endsWith(sub, length) возвращают true, если строка начинается/заканчивается с подстроки
// Параметр length в endsWith указывает, какую длину строки нужно взять (начиная с начала), чтобы проверить.
// если указать length больше реальной длины строки, то метод отработает так, будто бы параметр не задан (указана вся длина строки)
str = 'My little My cat';
console.log(str.startsWith('li', 3));
console.log(str.endsWith('at', 40));

// Методы получения строки
// str.slice(start, end) вернёт строку с номерами символов от start до end, не включая end.
// если аргумент end отсутствует, то slice будет работать до конца строки
// если аргументы отрицательные, например -3, то это будет значить буквально «3-й элемент с конца»
str = 'Hello'.slice(0, 4); // 'Hell'
str = 'Hello'.slice(1); // 'ello'
str = 'Hello'.slice(0, -1); // 'Hell'
str = 'Hello'.slice(4, 0); // ''
str = 'Hello'.slice(80, 90); // ''

// Метод str.substring(start, end) работает также как и slice, но start может быть меньше end
// это будет равнозначно тому, что мы поменяли их местами. Т.е. substring вернет подстроку между элементами start, end (не включая символ с бОльшим индексом). А еще для substring не поддерживаются отрицательные значения.
str = 'Hello'.substring(0, 4); // 'Hell'
str = 'Hello'.substring(4, 0); // 'Hell'
str = 'Hello'.substring(0, -1); // ''

// Метод str.substr(start, length) является как бы неформальным, потому что описан не в спецификации, а в приложении к ней.
// Но на практике он работает везде и позволяет вернуть подстроку длины length, начиная со start (может быть отрицательным)
str = 'Hello'.substr(0, 4); // 'Hell'
str = 'Hello'.substr(-5, 4); // 'Hell'
str = 'Hello'.substr(0, 40); // 'Hello'
str = 'Hello'.substr(10, 40); // ''

// Сравнение строк
// Метод str1.localCompare(str2) вернёт
// -1, если str1 < str2
// 0, если str1 === str2
// 1, если str1 > str2
console.log('hi'.localeCompare('Hi')); // -1
console.log('hi'.localeCompare('hi')); // 0
console.log('apple'.localeCompare('z')); // -1
console.log('apples'.localeCompare('apple')); // 1

// Пара полезных методов
console.log(' asdag fdfs dssd '.trim()); // 'asdag fdfs dssd' — убирает пробелы в начале и в конце строки
console.log('asd '.repeat(2)); // 'asd asd ' — сложит n-раз строку к самой себе

////////////////////////////////////////////////////
// Задача
// Напишите функцию которая преобразует полученную строку в "вертикальный вид" и выводит ее в консоль. Чтобы получилось вот так:
// showVerticalMessage('strada');
// S
// t
// r
// a
// d
// a
// Если строка начинается с буквы s - нужно вывести эту строку с первой заглавной буквой
// Если строка больше 7 символов - вывести только первые 7

const showVerticalMessage = str => {
    let editedString = str.slice(0, 7);
    if (editedString.startsWith('s')) {
        editedString = 'S' + editedString.slice(1);
    }
    for (const char of editedString) {
        console.log(char);
    }
    console.log('----------');
};
showVerticalMessage('stradafdgd');
showVerticalMessage('atradafdgd');
