let playerDataMap = [];
const fileContentsLineSplitted = (filename) => require("fs").readFileSync(filename, "ascii").toString().split("\n")
let dataStr = fileContentsLineSplitted("1.txt");

let playerIndex = 0;
let currentSum = 0;
dataStr.forEach((item) => {
    if (item !== "") {
        currentSum += +(item);
    } else {
        currentSum = 0;
        playerIndex += 1;
    }
    playerDataMap[playerIndex] = currentSum;
});

let result = playerDataMap.sort((a, b) => b - a).slice(0, 1) ?? undefined;
console.log(result);
