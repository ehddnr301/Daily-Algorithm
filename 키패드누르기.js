let getDistanceXY = (xy1, xy2) => Math.abs(xy1[0] - xy2[0]) + Math.abs(xy1[1] - xy2[1]);

let solution = (numbers, hand) => {
    let curLeft = "*";
    let curRight = "#";

    let NumberXYObj = {
        1: [0, 0],
        2: [1, 0],
        3: [2, 0],
        4: [0, 1],
        5: [1, 1],
        6: [2, 1],
        7: [0, 2],
        8: [1, 2],
        9: [2, 2],
        "*": [0, 3],
        0: [1, 3],
        "#": [2, 3]
    };
    
    return numbers.map((number) => {
        if(number === 1 || number === 4 || number === 7){
            curLeft = number;
            return "L";
        }else if(number === 3 || number === 6 || number === 9){
            curRight = number;
            return "R";
        }else {
            let distanceFromLeft = getDistanceXY(NumberXYObj[curLeft], NumberXYObj[number]);
            let distanceFromRight = getDistanceXY(NumberXYObj[curRight], NumberXYObj[number]);

            if(distanceFromLeft === distanceFromRight) {
                if(hand === "right") {
                    curRight = number;
                    return "R";
                }
                curLeft = number;
                return "L";
            }else if(distanceFromLeft < distanceFromRight) {
                curLeft = number;
                return "L";
            }
            curRight = number;
            return "R";
        }
    }).join("");
}