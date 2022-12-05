let contents = require("fs").readFileSync("data.txt").toString().split("\n\n")
let gridItem = contents[0].split("\n").join("").toString()
let rules = contents[1].split("\n")


const prepareHooksMap = (count = 9, increment = 4) => {
    let hooks = {}
    let index = 1;
    let counter = count * increment - 1;
    for (var i = 1; i <= count; i++) {
        hooks[i] = []
        for (var j = 0; j <= count - 2; j++) {
            hooks[i].push(gridItem[counter * j + index])
        }
        index += increment;
    }
    //remove empty
    for (let key in hooks) {
        hooks[key] = hooks[key].filter(x => x !== ' ')
    }
    console.log(hooks)
    return hooks;
}

const getNumericMap = () => {
    let numericRules = []
    rules.forEach(rule => {
        numericRules.push(rule.match(/\d+/g).map(x => +x))
    })
    return numericRules;
}

const makeMovement = (isReverse = false) => {
    let hooks = prepareHooksMap(9, 4)
    let numericMap = getNumericMap();
    for (var i = 0; i < numericMap.length; i++) {
        let [count, from, to] = numericMap[i];
        let slicedPiece = hooks[from].splice(0, count);
        slicedPiece = isReverse ? slicedPiece.reverse() : slicedPiece;
        hooks[to] = [...slicedPiece, ...hooks[to]]
    }
    return hooks;
}


let hooks = makeMovement();
let result = ''
for (var key in hooks) {
    result += hooks[key][0]
}

console.log(result)

//GSLCMFBRP