// Предупреждения погоды:
// Напишите код, который выводит различные предупреждения в консоль в зависимости от значения температуры. Например, если температура ниже 0, выведите "Опасно холодно!", если температура от 0 до +5, выведите "Очень холодно", если от +5 до +20, выведите "Прохладно", а если выше +20 – "Тепло".

function getWeather(temperature) {
    if (temperature < 0) {
        console.log('Заморозки');
    } else if (temperature < 5) {
        console.log('Очень холодно');
    } else if (temperature < 20) {
        console.log('Прохладно');
    } else {
        console.log('Тепло');
    }
}
getWeather(0);

//Система скидок:
//Рассчитайте итоговую цену товара с учетом скидок. Если сумма покупки больше 1000 рублей, покупатель получает скидку 5%, если больше 5000 – скидка 10%. Выведите итоговую цену в консоль.

function getFinalPrice(price) {
    const MIN_DISCOUNT = 0.95;
    const MAX_DISCOUNT = 0.9;
    const MIN_DISCOUNT_PRICE = 1000;
    const MAX_DISCOUNT_PRICE = 5000;

    if (price >= MAX_DISCOUNT_PRICE) {
        return price * MAX_DISCOUNT;
    }
    if (price >= MIN_DISCOUNT_PRICE) {
        return price * MIN_DISCOUNT;
    }
    return price;
}
console.log(getFinalPrice(999));

// Разделение пользователей по возрасту:
// Классифицируйте пользователей по возрастным категориям: до 18 лет – "подросток", от 18 до 65 – "взрослый", старше 65 – "пенсионер".

function classifyByAge(userAge) {
    const TEEN_MAX_AGE = 17;
    const ADULT_MAX_AGE = 64;

    if (userAge > ADULT_MAX_AGE) return 'Пенсионер';
    if (userAge > TEEN_MAX_AGE) return 'Взрослый';
    return 'Подросток';
}
console.log(classifyByAge(1));

// Режим работы магазина:
// Магазин работает с 9 до 18 часов. Создайте код, который проверяет час и сообщает пользователю, открыт магазин или уже закрыт. Здесь не нужно брать реальное время, как и с возрастом - можно подставить в переменную любое значение

function isWorking(time) {
    const shopWork_startTime = 9;
    const shopWork_endTime = 18;
    return time >= shopWork_startTime && time < shopWork_endTime;
}

if (isWorking(17)) console.log('Магазин открыт');
else console.log('Магазин закрыт');

// Оценка результатов теста:
// Допустим, у вас есть оценки за тест от 0 до 100. Классифицируйте результат как "отлично" (от 90 до 100), "хорошо" (от 70 до 89), "удовлетворительно" (от 50 до 69) и "неудачно" (ниже 50). В зависимости от результата, выводите соответствующее сообщение

function checkAssessment(assessment) {
    const MIN_ASSESSMENT = 0;
    const MAX_ASSESSMENT = 100;
    const GRADE_C = 50;
    const GRADE_B = 70;
    const GRADE_A = 90;

    if (assessment < MIN_ASSESSMENT || assessment > MAX_ASSESSMENT) return 'Ошибка, введите оценку от 0 до 100.';
    if (assessment < GRADE_C) return 'Неудачно';
    if (assessment < GRADE_B) return 'Удовлетворительно';
    if (assessment < GRADE_A) return 'Хорошо';
    return 'Отлично';
}

console.log(checkAssessment(100));
