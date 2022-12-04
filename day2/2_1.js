const fileContentsLineSplitted = (filename) => require("fs").readFileSync(filename, "ascii").toString().split("\n")
let dataStr = fileContentsLineSplitted("2.txt");
// let lettersMapping = [
//     { charOpponent: 'A', charMine: 'X', name: 'ROCK', value: 1 },
//     { charOpponent: 'B', charMine: 'Y', name: 'PAPER', value: 2 },
//     { charOpponent: 'C', charMine: 'Z', name: 'SCISSOR', value: 3 }
// ]
const scoreMap = { 'DRAW': 3, 'WIN': 6 }
let winningCondition = ['CX', 'BZ', 'AY'];
let drawCondition = ['CZ', 'AX', 'BY'];
let playerElfCombinationMap = {
    'A': 1,
    'B': 2,
    'C': 3,
    'X': 1,
    'Y': 2,
    'Z': 3
}
let totalSum = 0;
for (let index = 0; index < dataStr.length; index += 1) {
    let perRoundSequence = dataStr[index].toString().split(" ")
    let personalScore = combinationMap[perRoundSequence[1]];
    let char = perRoundSequence[0] + perRoundSequence[1];//first+second
    if (winningCondition.includes(char)) {
        personalScore += scoreMap.WIN
    }
    if (drawCondition.includes(char)) {
        personalScore += scoreMap.DRAW
    }
    totalSum += personalScore;
}
console.log(totalSum)

