function solution(n, words) {
    let wordBox = [];
    let firstChar = "";
    let lastChar = "";
    let len = 0;
    
    let wrongPersonNum = 0;
    let wrongCylcleNum = 0;
    
    
    // n 명의 사람이 영어 끝말잇기
    let dividedCycle = [];
    for(let i =0; i<words.length/n; i++){
        dividedCycle[i] = words.slice(i*n,n+i*n);
    }
    
    // cycle 별로 검사하기
    dividedCycle.forEach((wordArr,cycleNum)=> {
        
        // 단어 중복검사하기
        wordArr.forEach((word,personNum)=>{
            if(!wordBox.includes(word)){
                wordBox.push(word);
            }else{
                wrongPersonNum = personNum+1;
                wrongCylcleNum = cycleNum+1;
            }
            // 단어 이어짐 검사하기
            len = word.length -1;
            firstChar = word.charAt(0);
            if(lastChar !== "" && firstChar !== lastChar){
                wrongPersonNum = personNum+1;
                wrongCylcleNum = cycleNum+1;
            }
            lastChar = word.charAt(len);
            
        })
        
    })
    
    return [wrongPersonNum, wrongCylcleNum]
}