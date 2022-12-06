let contents = require("fs").readFileSync("data.txt").toString();
let marker = 0;
const MARKER_CAP = 4;

function hasDups(item) {
    let arr = item.split("")
    return (new Set(arr).size) !== arr.length;
}

for (let index = 0; index < contents.length; index++) {
    const element = contents.slice(index, index + MARKER_CAP)
    if (!hasDups(element)) {
        marker = index;
        break;
    }
}
let answer = MARKER_CAP + marker;
console.log(answer)

