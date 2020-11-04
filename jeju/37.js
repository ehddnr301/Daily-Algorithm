const input = ['원범','원범','혜원','혜원','혜원','혜원','유진','유진'];

const func = (ipt) => {
    let candidateList = new Set(input);
    candidateList = Array.from(candidateList);

    let votedCount = new Array(candidateList.length).fill(0);

    let indexOfValue;
    for(let inputNum=0 ; inputNum< ipt.length; inputNum++){
        indexOfValue = candidateList.indexOf(ipt[inputNum]);
        votedCount[indexOfValue] += 1;
    }

    let i = votedCount.indexOf(Math.max(...votedCount));
    return [candidateList[i], votedCount[i]]
}

const ans = func(input)

console.log(ans)