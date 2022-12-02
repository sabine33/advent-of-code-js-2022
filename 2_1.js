const { readFile } = require("fs");
let combinationMap = {
    'A': 1,
    'B': 2,
    'C': 3,
    'X': 1,
    'Y': 2,
    'Z': 3
}
let scoresMap = {
    'winner': 6,
    'draw': 3,
    'lose': 0
}
let winningCondition = ['CX', 'BZ', 'AY'];
let drawCondition = ['CZ', 'AX', 'BY'];
readFile("third.txt", (err, data) => {
    if (err) throw err;
    let dataStr = data.toString().split("\n");
    let sum = 0;
    for (let index = 0; index < dataStr.length; index += 1) {
        let perRoundSequence = dataStr[index].toString().split(" ")
        let personalScore = combinationMap[perRoundSequence[1]];
        let combination = perRoundSequence[0] + perRoundSequence[1];
        if (winningCondition.includes(combination)) {
            personalScore += scoresMap.winner
        }
        if (drawCondition.includes(combination)) {
            personalScore += scoresMap.draw
        }
        sum += personalScore;
    }
    console.log(sum)
});
