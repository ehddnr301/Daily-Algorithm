// * 별찍기

let pattern = 1;
let max = 9;
let empty = " ";
let emptyNum;

for(let i=1; i<6; i++){
    emptyNum = max - pattern;
    console.log(empty.repeat(emptyNum/2), "*".repeat(pattern), empty.repeat(emptyNum/2));
    pattern = pattern +2;
}