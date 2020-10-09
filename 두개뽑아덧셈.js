function solution(numbers) {
  let arr = [];
  const sortedNumbers = numbers.sort();
  const lengthOfNumbers = numbers.length;

  sortedNumbers.forEach((num, idx) => {
    for (let i = idx + 1; i < lengthOfNumbers; i++) {
      let plusedNum = sortedNumbers[idx] + sortedNumbers[i];

      if (!arr.includes(plusedNum)) {
        arr.push(plusedNum);
      }
    }
  });

  const sortedAns = arr.sort((a, b) => a - b);
  console.log(sortedAns);
  return sortedAns;
}
