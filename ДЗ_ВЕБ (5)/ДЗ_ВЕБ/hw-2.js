//ЗАДАНИЕ 1
console.log("Задание 1");

let password = 'пароль';
let userPassword = prompt('Введите пароль');

if (userPassword === password) {
  console.log('Пароль введен верно');
} else {
  console.log('Пароль введен неправильно');
}

//ЗАДАНИЕ 2 
console.log("\nЗадание 2");

let c;

// Проверка для c = 0
c = 0;
if (c > 0 && c < 10) {
  console.log(`c = ${c}: Верно`);
} else {
  console.log(`c = ${c}: Неверно`);
}

// Проверка для c = 10
c = 10;
if (c > 0 && c < 10) {
  console.log(`c = ${c}: Верно`);
} else {
  console.log(`c = ${c}: Неверно`);
}

// Проверка для c = -3
c = -3;
if (c > 0 && c < 10) {
  console.log(`c = ${c}: Верно`);
} else {
  console.log(`c = ${c}: Неверно`);
}

// Проверка для c = 2
c = 2;
if (c > 0 && c < 10) {
  console.log(`c = ${c}: Верно`);
} else {
  console.log(`c = ${c}: Неверно`);
}

//ЗАДАНИЕ 3
console.log("\nЗадание 3");

let d = 50;
let e = 120;

if (d > 100 || e > 100) {
  console.log('Верно');
} else {
  console.log('Неверно');
}

// Дополнительные проверки
console.log("Дополнительные проверки:");
// Проверка 1: обе переменные меньше 100
d = 50; e = 80;
console.log(`d = ${d}, e = ${e}: ${d > 100 || e > 100 ? 'Верно' : 'Неверно'}`);

// Проверка 2: одна переменная больше 100
d = 150; e = 80;
console.log(`d = ${d}, e = ${e}: ${d > 100 || e > 100 ? 'Верно' : 'Неверно'}`);

// Проверка 3: обе переменные больше 100
d = 150; e = 120;
console.log(`d = ${d}, e = ${e}: ${d > 100 || e > 100 ? 'Верно' : 'Неверно'}`);

//ЗАДАНИЕ 4
console.log("\nЗадание 4");

let a = '2';
let b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:

// Способ 1: преобразование в число с помощью Number()
alert(Number(a) + Number(b));

console.log("На экран выводится число 5");

//ЗАДАНИЕ 5 
console.log("\nЗадание 5");

let monthNumber = 12;

if (monthNumber > 13 || monthNumber < 1) {
  console.log('Номер месяца должен быть от 1 до 12');
} else {
  switch (monthNumber) {
    case 12:
    case 1:
    case 2:
      console.log(`Месяц ${monthNumber} принадлежит к сезону "зима"`);
      break;
    case 3:
    case 4:
    case 5:
      console.log(`Месяц ${monthNumber} принадлежит к сезону "весна"`);
      break;
    case 6:
    case 7:
    case 8:
      console.log(`Месяц ${monthNumber} принадлежит к сезону "лето"`);
      break;
    case 9:
    case 10:
    case 11:
      console.log(`Месяц ${monthNumber} принадлежит к сезону "осень"`);
      break;
    default:
      console.log('Такого месяца не существует');
  }
}

//ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ 1 
console.log("\n Дополнительное задание 1 ");

let userInput = prompt('Пожалуйста, введите любое число');
let number = Number(userInput);

// Проверка, является ли введенное значение числом
if (isNaN(number)) {
  alert('Вы ввели не число!');
  console.log('Вы ввели не число!');
} else {
  // Проверка на четность/нечетность
  if (number % 2 === 0) {
    alert('Число четное');
    console.log(`Число ${number} - четное`);
  } else {
    alert('Число нечетное');
    console.log(`Число ${number} - нечетное`);
  }
}

//ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ 2
console.log("\n Дополнительное задание 2");

let clientOS = 1;

console.log(`clientOS = ${clientOS} (${clientOS === 0 ? 'iOS' : 'Android'})`);

if (clientOS === 0) {
  console.log('Установите версию приложения для iOS по ссылке');
} else if (clientOS === 1) {
  console.log('Установите версию приложения для Android по ссылке');
} else {
  console.log('Неизвестная операционная система');
}

// ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ 3
console.log("\nДополнительное задание 3");

// 0 — iOS, 1 — Android
clientOS = 1;
let clientDeviceYear = 2015; 

console.log(`clientOS = ${clientOS} (${clientOS === 0 ? 'iOS' : 'Android'})`);
console.log(`clientDeviceYear = ${clientDeviceYear}`);

// Проверка года выпуска
let isOldDevice = clientDeviceYear < 2015;
let message = '';

if (clientOS === 0) { // iOS
  if (isOldDevice) {
    message = 'Установите облегченную версию приложения для iOS по ссылке';
  } else {
    message = 'Установите версию приложения для iOS по ссылке';
  }
} else if (clientOS === 1) { // Android
  if (isOldDevice) {
    message = 'Установите облегченную версию приложения для Android по ссылке';
  } else {
    message = 'Установите версию приложения для Android по ссылке';
  }
} else {
  message = 'Неизвестная операционная система';
}

console.log(message);