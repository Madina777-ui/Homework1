// Задание 1
let a = 10;
alert(a);
a = 20;
alert(a);

// Задание 2
const firstIphoneYear = 2007;
alert(firstIphoneYear);

// Задание 3
const jsCreator = "Брендан Эйх";
alert(jsCreator);

// Задание 4
const num1 = 10;
const num2 = 2;
alert(`Сумма: ${num1 + num2}`);
alert(`Разность: ${num1 - num2}`);
alert(`Произведение: ${num1 * num2}`);
alert(`Частное: ${num1 / num2}`);

// Задание 5
const result = 2 ** 5;
alert(result);

// Задание 6
const a6 = 9;
const b6 = 2;
alert(a6 % b6);

// Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

// Задание 8
const age = prompt("Сколько вам лет?");
alert(age);

// Задание 9
const user = {
    name: "Иван",
    age: 25,
    isAdmin: true
};

// Задание 10
const userName = prompt("Как вас зовут?");
alert(`Привет, ${userName}!`);

// Дополнительное задание
const number = prompt("Загадайте любое число:");
const doubled = number * 2;
alert(`Удвоенное число: ${doubled}`);

const plusTen = doubled + 10;
alert(`Плюс 10: ${plusTen}`);

const dividedByTwo = plusTen / 2;
alert(`Разделить на 2: ${dividedByTwo}`);

const finalResult = dividedByTwo - number;
alert(`Вычесть первоначальное число: ${finalResult}`);

alert("Ответ равен 5!");