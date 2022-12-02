const { readFile } = require("fs");

let combinationMap = {
    'A': 1,
    'B': 2,
    'C': 3,
    'X': 1,
    'Y': 2,
    'Z': 3
}
let score = 0;
let losingMap = {
    'A': 'Z', 'B': 'X', 'C': 'Y'
}
let winningMap = {
    'A': 'Y', 'B': 'Z', 'C': 'X'
}
let predictedChar = ''
readFile("third.txt", (err, data) => {
    if (err) throw err;
    let dataStr = data.toString().split("\n");
    for (let index = 0; index < dataStr.length; index += 1) {
        let linechar = dataStr[index].toString().split(" ")
        let [personalChar, opponentChar] = [linechar[1], linechar[0]];
        if (personalChar == 'Y') {
            predictedChar = linechar[0]
            score += 3;
        }
        else if (personalChar == 'X') {
            predictedChar = losingMap[opponentChar]
        }
        else {
            predictedChar = winningMap[opponentChar]
            score += 6;
        }
        score += combinationMap[predictedChar];
    }
    console.log(score)
});
