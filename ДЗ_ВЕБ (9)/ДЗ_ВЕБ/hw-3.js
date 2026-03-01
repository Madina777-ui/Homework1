// Задание 1
console.log("Задание 1:");
for (let i = 0; i < 2; i++) {
    console.log("Привет");
}

// Задание 2
console.log("Задание 2:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Задание 3
console.log("Задание 3:");
for (let i = 7; i <= 22; i++) {
    console.log(i);
}

// Задание 4
console.log("Задание 4:");
const obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
};

for (const key in obj) {
    console.log(`${key} — зарплата ${obj[key]} долларов`);
}

// Задание 5
console.log("Задание 5:");
let n = 1000;
let num = 0;

while (n >= 50) {
    n = n / 2;
    num++;
}

console.log(`Полученное число: ${n}`);
console.log(`Количество итераций: ${num}`);

// Задание 6
console.log("Задание 6:");
const firstFriday = 3; 
const daysInMonth = 31;


for (let day = firstFriday; day <= daysInMonth; day += 7) {
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}

// Дополнительное задание 1
console.log("Дополнительное задание 1:");
let k = 100;
let iterations = 0;


while (k >= 0) {
    k -= 7;
    iterations++;
}

console.log(`Последнее число перед переходом в отрицательные: ${k + 7}`);
console.log(`Количество итераций: ${iterations - 1}`);

// Дополнительное задание 2
console.log("Дополнительное задание 2:");
const months = [
    "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
];


for (let i = 0; i < months.length; i++) {
    console.log(`${i + 1}. ${months[i]}`);
}

// Дополнительное задание 3
console.log("Дополнительное задание 3:");
const book = {
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    year: 1967,
    genre: "Роман"
};


for (const property in book) {
    console.log(`${property}: ${book[property]}`);
}

// Дополнительное задание 4
console.log("Дополнительное задание 4:");

const randomNumbers = [];


for (let i = 0; i < 10; i++) {
    randomNumbers.push(Math.floor(Math.random() * 100) + 1);
}

console.log("Массив чисел:", randomNumbers);


let minNumber = randomNumbers[0];


for (let i = 1; i < randomNumbers.length; i++) {
    if (randomNumbers[i] < minNumber) {
        minNumber = randomNumbers[i];
    }
}

console.log("Минимальное число (найдено циклом):", minNumber);
