// * 사탕을 1-3위까지만 주는데 3명이 최고득점이고 같은 점수이면 1등은 3명 그다음 점수부터 2등

const input = [97,86,75,66,55,97,85,97,97,95];

const func = (ipt) => {
    let count = 0;
    let candy = 0;

    const sortedArr = ipt.sort((a,b)=> b-a)
    for(let i=0; i<sortedArr.length ; i++){
        if(sortedArr[i] !== sortedArr[i+1]){
            count++;
            candy++;
        }
        else {
            candy++;
        }
        if(count === 3){
            break;
        }

    }
    return candy;

}

a = func(input)
console.log(a)