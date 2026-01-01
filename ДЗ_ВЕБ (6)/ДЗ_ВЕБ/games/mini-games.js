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
