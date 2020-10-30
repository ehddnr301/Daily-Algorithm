const input = '10 2'

let numArr;
let first;
let second;
let a;
let b;

const cal = (ipt) => {
    numArr = ipt.split(' ');
    first = parseInt(numArr[0]);
    second = parseInt(numArr[1]);

    a = first / second;
    b = first % second;

    return `${a} ${b}`;


}

c = cal(input)
console.log(c)