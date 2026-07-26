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

function reverse() {
  const userInput = prompt("Введите текст для переворачивания:");
  
  if (userInput === null) {
    alert("Операция отменена");
    return;
  }
  
  if (userInput.trim() === "") {
    alert("Вы ввели пустую строку!");
    return;
  }
  
  const reversedText = userInput.split('').reverse().join('');
  
  alert(`Оригинал: ${userInput}\n\nПеревернутый текст: ${reversedText}`);
}

function quiz() {
    const quiz = [
        {
            question: "Какой цвет небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];
    
    let correctAnswers = 0;
    
    for (let i = 0; i < quiz.length; i++) {
        const questionText = quiz[i].question + "\n\n" + quiz[i].options.join("\n") + "\n\nВведите номер правильного ответа:";
        const userAnswer = prompt(questionText);
        
        if (userAnswer === null) {
            alert("Викторина прервана!");
            return;
        }
        
        if (parseInt(userAnswer) === quiz[i].correctAnswer) {
            correctAnswers++;
        }
    }
    
    alert(`Викторина завершена!\nВы ответили правильно на ${correctAnswers} из ${quiz.length} вопросов.`);
}

function playRockPaperScissors() {
    const choices = ["камень", "ножницы", "бумага"];
    
    const userChoice = prompt("Введите ваш выбор (камень, ножницы или бумага):");
    
    if (userChoice === null) {
        alert("Игра отменена!");
        return;
    }
    
    const normalizedUserChoice = userChoice.toLowerCase().trim();
    
    if (!choices.includes(normalizedUserChoice)) {
        alert("Некорректный ввод! Пожалуйста, введите 'камень', 'ножницы' или 'бумага'.");
        return;
    }
    
    const randomIndex = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomIndex];
    
    let result;
    
    if (normalizedUserChoice === computerChoice) {
        result = "Ничья!";
    } else if (
        (normalizedUserChoice === "камень" && computerChoice === "ножницы") ||
        (normalizedUserChoice === "ножницы" && computerChoice === "бумага") ||
        (normalizedUserChoice === "бумага" && computerChoice === "камень")
    ) {
        result = "Вы победили!";
    } else {
        result = "Компьютер победил!";
    }
    
    alert(`Ваш выбор: ${normalizedUserChoice}\nВыбор компьютера: ${computerChoice}\n\nРезультат: ${result}`);
}

