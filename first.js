const { readFile } = require("fs");
let playerDataMap = [];
readFile("data.txt", (err, data) => {
    if (err) throw err;
    let dataStr = data.toString().split("\n");
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
});
