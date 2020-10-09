function solution(board, moves) {
  const boardHeight = board.length;
  const boardWidth = board[0].length;

  const arr = [];
  let count = 0;

  for (let j = 0; j < moves.length; j++) {
    let crane = moves[j];

    for (let i = 0; i < boardHeight; i++) {
      let thisTry = board[i][crane - 1];

      if (thisTry !== 0) {
        console.log(thisTry);
        board[i][crane - 1] = 0;

        if (thisTry === arr[arr.length - 1]) {
          count += 2;
          arr.pop();
        } else {
          arr.push(thisTry);
        }

        break;
      }
    }
  }
  return count;
}
