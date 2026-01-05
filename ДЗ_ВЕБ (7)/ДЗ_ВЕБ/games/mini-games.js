function GuessNumber() {
    const intendedNumber = Math.floor(Math.random() * 100);

    let userNum;
    while(userNum != intendedNumber){ 
        userNum = Number(prompt("Попробуйте угадать загаданное число в диопазоне от 1 до 100", 1));
        if(userNum < intendedNumber){
            alert("Загаданное число больше")
        }
        else if(userNum > intendedNumber){
            alert("Загаданное число меньше")
        }
        else{
            alert("Победа! Вы попали в точку!")
        };
    }
}

function simpleArithmetic() {
    alert('Добро пожаловать в математическую игру!');
    
    const operation = Math.floor(Math.random() * 4);
    
    let num1, num2, correctAnswer, operator;
    
    switch (operation) {
        case 0: // Сложение
            num1 = Math.floor(Math.random() * 100) + 1; 
            num2 = Math.floor(Math.random() * 100) + 1; 
            operator = '+';
            correctAnswer = num1 + num2;
            break;
            
        case 1: // Вычитание
            num1 = Math.floor(Math.random() * 100) + 1; 
            num2 = Math.floor(Math.random() * 100) + 1; 
            operator = '-';
            correctAnswer = num1 - num2;
            break;
            
        case 2: // Умножение
            num1 = Math.floor(Math.random() * 20) + 1; 
            num2 = Math.floor(Math.random() * 10) + 1; 
            operator = '*';
            correctAnswer = num1 * num2;
            break;
            
        case 3: // Деление
            num2 = Math.floor(Math.random() * 10) + 1;
            correctAnswer = Math.floor(Math.random() * 10) + 1;
            num1 = num2 * correctAnswer; 
            operator = '/';
            break;
    }
    
    const problem = `${num1} ${operator} ${num2}`;
    
    let userAnswer = prompt(`Решите пример: ${problem} = ?`);
    
    if (userAnswer === null) {
        alert('Игра завершена. Возвращайтесь еще!');
        return;
    }
    
    userAnswer = Number(userAnswer);
    
    if (isNaN(userAnswer)) {
        alert('Вы ввели не число! Попробуйте еще раз.');
        return;
    }
    
    if (Math.abs(userAnswer - correctAnswer) < 0.001) {
        alert(`Правильно! ${problem} = ${correctAnswer}`);
    } else {
        alert(`Неправильно. ${problem} = ${correctAnswer}. Ваш ответ: ${userAnswer}`);
    }
}
