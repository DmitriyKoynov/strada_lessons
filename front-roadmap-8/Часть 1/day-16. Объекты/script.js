// Создаем объект и сразу прописываем его свойства (литеральный синтаксис)
// Свойство 'contact info' указываем в кавычках, потому что в нём используется пробел
// Метод showContactInfo показывает контактные данные
const testing_object = {
    name: 'Olya',
    number: 32,
    'contact info': 'Белембеевская улица, 8 марта, 47/4',
    showContactInfo() {
        console.log(this['contact info']);
    }
};

// Выводим значения свойств
// Имена 'обычных' свойств можно указать просто через точку (точечная нотация)
// Имена 'проблемных' свойств (наприме, с пробелами в имени, если начинаются на цифру или используют закрепленные в коде имена) нужно указывать, используя квадратные скобки и кавычки (скобочная нотация).
// Ниже показываю, что и имена обычных свойств можно указывать в скобочной нотации
console.log(testing_object.name);
console.log(testing_object['contact info']);
console.log(testing_object['number']);

// Объявляем объект через new Object() — это объявление через конструктор
// После этого задаем ему свойство и присваиваем ему значение (литеральный синтаксис)
const another_object = new Object();
another_object.meme = 3;
console.log(another_object.meme);

// Объекты можно создавать как переменные или как константы
// Константы используются чаще, чтобы избежать ошибок переопределения
// При создании через константу, ты не можешь переопределить другой переменной или другим объектом
// При этом ты всё равно имеешь полный доступ к работе с её свойствама — создание, изменение и удаление

const constantObject = new Object();
constantObject.a = 1;
constantObject.b = 2;
constantObject.c = 3;
constantObject.showObject = function () {
    console.log(this);
};

delete constantObject.b; // Удаление свойства
constantObject.c = 4;
constantObject.showObject(); // {a:1, c:4, showObject: [Function (anonymous)]}
//constantObject = new Object(); // Ошибка присваивания

let letObject = new Object();
letObject.a = 1;
letObject = new Object(); // Никаких ошибок

/////////////////////////////////////////
// Создание объекта студента
// Создайте объект student, который будет содержать следующие свойства:
// firstName - имя студента
// lastName - фамилия студента
// age - возраст студента
// courses - список курсов, на которых обучается студент (массив строк)
// Добавьте в объект метод getFullName, который будет возвращать полное имя студента (имя и фамилию).

const student = new Object();
student.firstName = 'John';
student.lastName = 'Malkovic';
student.age = 18;
student.courses = ['Math', 'Piano', 'Solfedjio'];
student.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
};

const anotherStudent = {
    'Private Info': {
        firstName: 'Mikki',
        lastName: 'Dudar',
        age: 24,
        courses: ['Russian language', 'History', 'PhyEdu']
    },
    getFullName() {
        return this['Private Info'].firstName + ' ' + this['Private Info'].lastName;
    }
};

console.log(student.getFullName());
console.log(anotherStudent.getFullName());
console.log(anotherStudent['Private Info'].courses[0]);

// Задание 2: Работа с объектом автомобиля
// Создайте объект car, который будет содержать следующие свойства:

// make - марка автомобиля
// model - модель автомобиля
// year - год выпуска автомобиля
// mileage - пробег автомобиля
// Добавьте в объект метод getCarInfo, который будет возвращать информацию об автомобиле в формате: "Марка: [марка], Модель: [модель], Год выпуска: [год], Пробег: [пробег]".

const car = {
    make: 'VolksWagen',
    model: 'Tiguan',
    year: 2022,
    mileage: 16443,
    getCarInfo() {
        return `Марка: ${this.make}, Модель: ${this.model}, Год выпуска: ${this.year}, Пробег: ${this.mileage}`;
    }
};

const anotherCar = new Object();
anotherCar.make = 'Mazda';
anotherCar.model = 'CX 6';
anotherCar.year = 2020;
anotherCar.mileage = 24563;
anotherCar.getCarInfo = function () {
    return `Марка: ${this.make}, Модель: ${this.model}, Год выпуска: ${this.year}, Пробег: ${this.mileage}`;
};

// Задание 3: Управление библиотекой книг
// Создайте объект library, который будет содержать следующие свойства:

// books - список книг (массив объектов, где каждый объект представляет собой книгу с полями title, author, year)
// Добавьте в объект следующие методы:

// addBook - добавляет новую книгу в список
// removeBookByTitle - удаляет книгу из списка по названию
// findBooksByAuthor - возвращает список всех книг указанного автора

const library = {
    books: [
        {
            title: 'Книга1',
            author: 'Автор1',
            year: 2000
        },
        {
            title: 'Книга2',
            author: 'Автор2',
            year: 2001
        },
        {
            title: 'Книга3',
            author: 'Автор1',
            year: 2002
        }
    ],
    addBook(newBook) {
        this.books.push(newBook);
    },
    removeBook(title) {
        this.books = this.books.filter(item => item.title !== title);
    },
    findBooksByAuthor(author) {
        return this.books.filter(items => items.author === author);
    }
};
