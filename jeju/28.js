// * 2-gram

const input = 'Javascript';
const ansFunc = (ipt) => {
    const splitedStr = ipt.split('')
    for(let i =0; i<ipt.length-1; i++){
        console.log(splitedStr[i], " ", splitedStr[i+1]);
    }
}

ansFunc(input);