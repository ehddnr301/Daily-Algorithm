function solution(n)
{
    let jumpCount = 0;
    
    for(let i=n; i>0 ; i=i /2){
        let backwardCheck = i / 2;
        if(!Number.isInteger(backwardCheck)){
            console.log('jump from', i, 'to', i-1)
            i--;
            jumpCount++;
            continue;
        }else{
            console.log('blink from', i, 'to', i/2)
        }
    }
    return jumpCount
}