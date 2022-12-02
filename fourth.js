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

readFile("third.txt", (err, data) => {
    if (err) throw err;
    let dataStr = data.toString().split("\n");
    for (let index = 0; index < dataStr.length; index += 1) {
        let linechar = dataStr[index].toString().split(" ")
        let [myChar, hisChar] = [linechar[1], linechar[0]];
        let predictedChar = '';
        if (myChar == 'Y') {
            predictedChar = linechar[0]
            score += 3;
        }
        else if (myChar == 'X') {
            if (hisChar == 'A') predictedChar = 'Z'
            if (hisChar == 'B') predictedChar = 'X'
            if (hisChar == 'C') predictedChar = 'Y'
            score += 0;
        }
        else {
            if (hisChar == 'A') predictedChar = 'Y'
            if (hisChar == 'B') predictedChar = 'Z'
            if (hisChar == 'C') predictedChar = 'X'
            score += 6;
        }

        score += combinationMap[predictedChar];
    }
    console.log(score)
});
