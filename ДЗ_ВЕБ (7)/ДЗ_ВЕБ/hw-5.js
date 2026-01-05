// Задание 1
 const array1 = [1, 5, 4, 10, 0, 3];

 for (let i = 0; i < array1.length; i++) {
    console.log(array1[i]);
    if (array1[i] === 10) {
        break;
    }
}

// Задание 2
const array2 = [1, 5, 4, 10, 0, 3];
console.log('Массив:', array2);
for (let i = 0; i < array2.length; i++) {
    if (array2[i] === 4) {
        console.log(`Индекс значения 4: ${i}`);
        break;
    }
}

//Или
console.log(`Индекс значения 4 (используя indexOf): ${array2.indexOf(4)}`);

// Задание 3
const array3 = [1, 3, 5, 10, 20];
console.log('Элементы через пробел:', array3.join(' '));

// Задание 4
const multiArray = [];
for (let i = 0; i < 3; i++) {
    const innerArray = [];
    for (let j = 0; j < 3; j++) {
        innerArray.push(1);
    }
    multiArray.push(innerArray);
}
console.log('Многомерный массив:', multiArray);

// Задание 5
const array5 = [1, 1, 1];
array5.push(2, 2, 2);
console.log('После добавления 2, 2, 2:', array5);

// Задание 6
let array6 = [9, 8, 7, 'a', 6, 5];
console.log('Исходный массив:', array6);
array6.sort(); 
console.log('После сортировки:', array6);
array6 = array6.filter(item => item !== 'a');
console.log('После удаления "a":', array6);

// Задание 7
function guessNumber() {
    const array7 = [9, 8, 7, 6, 5];
    console.log('Массив для угадывания:', array7);
    
    const userGuess = prompt('Угадайте число из массива [9, 8, 7, 6, 5]:');
    
    if (userGuess === null) {
        alert('Вы отменили ввод');
        return;
    }
    
    const guessNumber = Number(userGuess);
    
    if (isNaN(guessNumber)) {
        alert('Введите число!');
        return;
    }
    
    if (array7.includes(guessNumber)) {
        alert('Угадал!');
    } else {
        alert('Не угадал');
    }
}

// Задание 8
const str = 'abcdef';
console.log('Исходная строка:', str);
const reversedStr = str.split('').reverse().join('');
console.log('Перевернутая строка:', reversedStr);

// Задание 9
const array9 = [[1, 2, 3], [4, 5, 6]];
console.log('Исходный массив:', array9);
const flattenedArray = [].concat(...array9);
console.log('Объединенный массив:', flattenedArray);
// Или
const flattenedArray2 = array9.flat();
console.log('Объединенный массив (используя flat):', flattenedArray2);

// Задание 10
function sumAdjacentElements() {
    const randomArray = [];
    for (let i = 0; i < 10; i++) {
        randomArray.push(Math.floor(Math.random() * 10) + 1);
    }
    console.log('Сгенерированный массив:', randomArray);
    
    console.log('Суммы пар соседних элементов:');
    for (let i = 0; i < randomArray.length - 1; i++) {
        const sum = randomArray[i] + randomArray[i + 1];
        console.log(`${randomArray[i]} + ${randomArray[i + 1]} = ${sum}`);
    }
}

// Задание 11
function squareArray(numbers) {
    return numbers.map(num => num * num);
}

const testArray11 = [1, 2, 3, 4, 5];
console.log('Исходный массив:', testArray11);
console.log('Массив квадратов:', squareArray(testArray11));

// Задание 12
function getStringLengths(strings) {
    return strings.map(str => str.length);
}

const testArray12 = ['apple', 'banana', 'cherry', 'date'];
console.log('Исходный массив строк:', testArray12);
console.log('Длины строк:', getStringLengths(testArray12));

// Задание 13
function getNegativeNumbers(numbers) {
    return numbers.filter(num => num < 0);
}

const testArray13 = [1, -2, 3, -4, 5, -6, 0];
console.log('Исходный массив:', testArray13);
console.log('Отрицательные числа:', getNegativeNumbers(testArray13));

// Задание 14
function generateEvenNumbersArray() {
    const randomArray = Array.from({length: 10}, () => Math.floor(Math.random() * 11));
    
    const evenNumbers = randomArray.filter(num => num % 2 === 0);
    
    console.log('Исходный массив:', randomArray);
    console.log('Массив четных чисел:', evenNumbers);
    
    return { randomArray, evenNumbers };
}

// Задание 15
function calculateAverage() {
    const randomArray = Array.from({length: 6}, () => Math.floor(Math.random() * 10) + 1);
    
    const sum = randomArray.reduce((acc, num) => acc + num, 0);
    const average = sum / randomArray.length;
    
    console.log('Массив из 6 чисел:', randomArray);
    console.log(`Сумма элементов: ${sum}`);
    console.log(`Среднее арифметическое: ${average.toFixed(2)}`);
    
    return average;
}