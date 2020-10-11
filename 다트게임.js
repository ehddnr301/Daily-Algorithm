const calculate = (num, bonus, option) =>{
    let result = 0;
    let parsedBonus = bonus === 'S' ? 1 : bonus === 'D' ? 2 : 3;
    if(option === '*'){
        result = (Math.pow(num,parsedBonus)) * 2;
    }else if(option === '#'){
        result = -(Math.pow(num,parsedBonus));
    }else{
        result = (Math.pow(num,parsedBonus));
    }
    return result;
}

function solution(dartResult) {
    let answer = 0;
    const numStack = [];
    
    // dart 점수만 모읍니다.
    for (let i = 0; i < dartResult.length; i++) {
        const number = parseInt(dartResult.slice(i))
        if(numStack.length < 3 && !isNaN(number)){
            if(numStack[numStack.length -1] !== 10 || number !== 0){
                numStack.push(number);
            }
        }
    }
    
    // dart bonuse 만 모읍니다.
    const bonus = dartResult.split('').filter(b => b === 'S' || b === 'D' || b === 'T');
    
    // option 만 모읍니다.
    let firstOption;
    let secondOption;
    let thirdOption;
    const option = dartResult.split('').forEach((o,idx) => {
        if((o === '*' || o === '#') && idx < 4){
            firstOption = o;
        }else if((o === '*' || o === '#') && dartResult.length-2 < idx){
            thirdOption = o;
        }else if(o === '*' || o === '#'){
            secondOption = o;
        }
    });
    
    let firstScore = calculate(numStack[0], bonus[0], firstOption);
    let secondScore = calculate(numStack[1], bonus[1], secondOption);
    let thirdScore = calculate(numStack[2], bonus[2], thirdOption);

    // option이 * 일경우 이전값도 2배 해주어야 합니다.
    if(secondOption === '*'){
        firstScore = firstScore * 2;
    }else if(thirdOption === '*'){
        secondScore = secondScore * 2;
    }
    return firstScore + secondScore + thirdScore;
}