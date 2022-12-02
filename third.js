const { readFile } = require("fs");
// A: rock:1, B: paper:1 , C:3 scissor
// X: rock:1, Y: paper:2,z:scissor:3
//scissor beats paper
//paper beats rock
//rock beats scissors
let combinationMap = {
    'A': 1,
    'B': 2,
    'C': 3,
    'X': 1,
    'Y': 2,
    'Z': 3
}
readFile("third.txt", (err, data) => {
    if (err) throw err;
    let dataStr = data.toString().split("\n");
    let sum = 0;
    for (let index = 0; index < dataStr.length; index += 1) {
        let linechar = dataStr[index].toString().split(" ")
        // let myScore = 0;
        let myScore = combinationMap[linechar[1]];
        let char = linechar[0] + linechar[1];
        if (['CX', 'BZ', 'AY'].includes(char)) {
            myScore += 6
        }
        if (['CZ', 'AX', 'BY'].includes(char)) {
            myScore += 3;
        }
        // console.log({ char, value })
        sum += myScore;
    }
    console.log(sum)
});
