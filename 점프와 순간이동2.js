function solution(n)
{
    let jumpCount = 0;
    
    for(let i=n; i>0 ; i=i /2){
        let backwardCheck = i / 2;
        if(!Number.isInteger(backwardCheck)){
            i--;
            jumpCount++;
            continue;
        }
    }
    return jumpCount
}