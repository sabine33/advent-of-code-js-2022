([currentSum, playerDataMap, playerIndex] = [0, [], 0]) && require("fs").readFileSync("data.txt", "ascii").split("\n").forEach((item) => {
    (item !== ""
        ? (currentSum += +item) : ((currentSum = 0), (playerIndex += 1))) && (playerDataMap[playerIndex] = currentSum);
});
console.log(playerDataMap.sort((a, b) => b - a).slice(0, 3).reduce((acc, current) => acc + current));
