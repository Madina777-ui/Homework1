// Задание 1
console.log('Задание 1:');
console.log('js'.toUpperCase());
console.log('');

// Задание 2
function filterByPrefix(arr, prefix) {
    return arr.filter(item => item.toLowerCase().startsWith(prefix.toLowerCase()));
}
console.log('Задание 2:');
console.log(filterByPrefix(['Яблоко', 'яблоко', 'Банан', 'Яблочный сок'], 'яблоко'));
console.log('');

// Задание 3
const num = 32.58884;
console.log('Задание 3:');
console.log('Math.floor:', Math.floor(num)); 
console.log('Math.ceil:', Math.ceil(num));  
console.log('Math.round:', Math.round(num)); 
console.log('');

// Задание 4
console.log('Задание 4:');
console.log('Минимальное:', Math.min(52, 53, 49, 77, 21, 32));
console.log('Максимальное:', Math.max(52, 53, 49, 77, 21, 32)); 
console.log('');

// Задание 5
function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}
console.log('Задание 5:');
console.log('Случайное число:', getRandomNumber());
console.log('');

// Задание 6
function getRandomArray(n) {
    const length = Math.floor(n / 2);
    const result = [];
    for (let i = 0; i < length; i++) {
        result.push(Math.floor(Math.random() * (n + 1)));
    }
    return result;
}
console.log('Задание 6:');
console.log('Массив для n=10:', getRandomArray(10));
console.log('');

// Задание 7
function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log('Задание 7:');
console.log('Случайное число от 5 до 15:', getRandomInRange(5, 15));
console.log('');

// Задание 8
console.log('Задание 8:');
console.log('Текущая дата:', new Date());
console.log('');

// Задание 9
const currentDate = new Date();
const futureDate = new Date(currentDate);
futureDate.setDate(currentDate.getDate() + 73);
console.log('Задание 9:');
console.log('Через 73 дня:', futureDate);
console.log('');

// Задание 10
function formatDate(date) {
    const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const dayOfWeek = days[date.getDay()];
    
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    
    return `Дата: ${day} ${month} ${year} — это ${dayOfWeek}.\nВремя: ${hours}:${minutes}:${seconds}`;
}
console.log('Задание 10:');
console.log(formatDate(new Date()));