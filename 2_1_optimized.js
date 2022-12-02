const { readFile } = require("fs");

let lettersMapping = [
    { charOpponent: 'A', charMine: 'X', name: 'ROCK', value: 1 },
    { charOpponent: 'B', charMine: 'Y', name: 'PAPER', value: 2 },
    { charOpponent: 'C', charMine: 'Z', name: 'SCISSOR', value: 3 }
]

let winningCondition = ['CX', 'BZ', 'AY'];
let drawCondition = ['CZ', 'AX', 'BY'];

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
