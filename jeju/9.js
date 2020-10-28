// * 여러 string을 하나의 string 으로 합치기

let year = '2020';
let month = '04';
let day = '23';
let hour = '12';
let minute = '45';
let second = '23';

const a = year.concat("/",month,'/',day,'/',hour,':',minute,':',second)

console.log(a)