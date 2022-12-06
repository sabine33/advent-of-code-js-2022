let contents = require("fs").readFileSync("data.txt").toString().split("\n\n")
let gridItem = contents[0].split("\n").join("").toString()
let rules = contents[1].split("\n")


const prepareColumnsMap = (count = 9, increment = 4) => {
    let columns = {}
    let index = 1;
    let counter = count * increment - 1;
    for (var i = 1; i <= count; i++) {
        columns[i] = []
        for (var j = 0; j <= count - 2; j++) {
            columns[i].push(gridItem[counter * j + index])
        }
        index += increment;
    }
    //remove empty
    for (let key in columns) {
        columns[key] = columns[key].filter(x => x !== ' ')
    }
    console.log(columns)
    return columns;
}

const getNumericMap = () => {
    let numericRules = []
    rules.forEach(rule => {
        numericRules.push(rule.match(/\d+/g).map(x => +x))
    })
    return numericRules;
}

const makeMovement = (isReverse = false) => {
    let columns = prepareColumnsMap(9, 4)
    let numericMap = getNumericMap();
    for (var i = 0; i < numericMap.length; i++) {
        let [count, from, to] = numericMap[i];
        let slicedPiece = columns[from].splice(0, count);
        slicedPiece = isReverse ? slicedPiece.reverse() : slicedPiece;
        columns[to] = [...slicedPiece, ...columns[to]]
    }
    return columns;
}


let columns = makeMovement();
let result = ''
for (var key in columns) {
    result += columns[key][0]
}

console.log(result)

//GSLCMFBRP