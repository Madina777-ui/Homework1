// Задание 1
function getMinNumber(a, b) {
    return a <= b ? a : b;
}

// Задание 2
function checkEvenOdd(number) {
    return number % 2 === 0 ? 'Число четное' : 'Число нечетное';
}

// Задание 3
function printSquare(number) {
    console.log(number * number);
}

function getSquare(number) {
    return number * number;
}

// Задание 4
function greetByAge() {
    let age = prompt('Сколько вам лет?');
    
    if (age === null) {
        return;
    }
    
    age = Number(age);
    
    if (isNaN(age) || age < 0) {
        alert('Вы ввели неправильное значение');
    } else if (age >= 0 && age <= 12) {
        alert('Привет, друг!');
    } else {
        alert('Добро пожаловать!');
    }
}

// Задание 5
function multiplyNumbers(a, b) {
    if (isNaN(Number(a)) || isNaN(Number(b))) {
        return 'Одно или оба значения не являются числом';
    }
    return Number(a) * Number(b);
}

// Задание 6
function cubeNumber() {
    let input = prompt('Введите число:');
    
    if (input === null) {
        return;
    }
    
    let number = Number(input);
    
    if (isNaN(number)) {
        return 'Переданный параметр не является числом';
    }
    
    let cube = number * number * number;
    return `${number} в кубе равняется ${cube}`;
}

// Задание 7
const circle1 = {
    radius: 5,
    
    getArea: function() {
        return Math.PI * this.radius * this.radius;
    },
    
    getPerimeter: function() {
        return 2 * Math.PI * this.radius;
    }
};

const circle2 = {
    radius: 10,
    
    getArea: function() {
        return Math.PI * this.radius * this.radius;
    },
    
    getPerimeter: function() {
        return 2 * Math.PI * this.radius;
    }
};
