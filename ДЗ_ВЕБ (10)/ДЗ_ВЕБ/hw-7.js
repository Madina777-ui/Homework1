// Задание 1
const people = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];

console.log(people.sort((a, b) => a.age - b.age));

// Задание 2
function isPositive(number) {
    return number > 0;
}

function isMale(person) {
    return person.gender === 'male';
}

function filter(arr, ruleFunction) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (ruleFunction(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

const people2 = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log('filter([3, -4, 1, 9], isPositive):', filter([3, -4, 1, 9], isPositive));
console.log('filter(people2, isMale):', filter(people2, isMale));

// Задание 3
console.log('Начинается 30-секундный интервал');
let secondsPassed = 0;
const intervalId = setInterval(() => {
    console.log(new Date());
    secondsPassed += 3;
    if (secondsPassed >= 30) {
        clearInterval(intervalId);
        console.log('30 секунд прошло');
    }
}, 3000);

// Задание 4 
setTimeout(() => {
    function delayForSecond(callback) {
        setTimeout(callback, 1000);
    }
    
    delayForSecond(() => console.log('Привет, Глеб!'));
    
    // Задание 5 
    setTimeout(() => {        
        function delayForSecond2(cb) {
            setTimeout(() => {
                console.log('Прошла одна секунда');
                if(cb) { cb(); }
            }, 1000);
        }
        
        function sayHi(name) {
            console.log(`Привет, ${name}!`);
        }
        
        delayForSecond2(() => sayHi('Глеб'));
    }, 1500);
}, 31000); 