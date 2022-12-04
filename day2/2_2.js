const fileContentsLineSplitted = (filename) => require("fs").readFileSync(filename, "ascii").toString().split("\n")

let combinationMap = {
    'A': 1,
    'B': 2,
    'C': 3,
    'X': 1,
    'Y': 2,
    'Z': 3
}
let losingMap = {
    'A': 'Z', 'B': 'X', 'C': 'Y'
}
let winningMap = {
    'A': 'Y', 'B': 'Z', 'C': 'X'
}


let predictedChar = ''
let score = 0;
let dataStr = fileContentsLineSplitted("2,txt");
for (let index = 0; index < dataStr.length; index += 1) {
    let perLineChar = dataStr[index].toString().split(" ")
    let [playerChar, elfChar] = [perLineChar[1], perLineChar[0]];
    if (playerChar == 'Y') {
        predictedChar = perLineChar[0]
        score += 3;
    }
    else if (playerChar == 'X') {
        predictedChar = losingMap[elfChar]
    }
    else {
        predictedChar = winningMap[elfChar]
        score += 6;
    }
    score += combinationMap[predictedChar];
}
console.log(score)
