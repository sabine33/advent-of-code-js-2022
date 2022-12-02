const { readFile } = require("fs");
let combinationMap = {
    'A': 1,
    'B': 2,
    'C': 3,
    'X': 1,
    'Y': 2,
    'Z': 3
}
let winningCondition = ['CX', 'BZ', 'AY'];
let drawCondition = ['CZ', 'AX', 'BY']
readFile("third.txt", (err, data) => {
    if (err) throw err;
    let dataStr = data.toString().split("\n");
    let sum = 0;
    for (let index = 0; index < dataStr.length; index += 1) {
        let perRoundSequence = dataStr[index].toString().split(" ")
        let personalScore = combinationMap[perRoundSequence[1]];
        let char = perRoundSequence[0] + perRoundSequence[1];//first+second
        if (winningCondition.includes(char)) {
            personalScore += 6
        }
        if (drawCondition.includes(char)) {
            personalScore += 3;
        }
        sum += personalScore;
    }
    console.log(sum)
});
