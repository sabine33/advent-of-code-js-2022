let fileContentsArray = require("fs").readFileSync("four.txt", "ascii").split("\n")

const [minLowercase, maxLowercase, minUppercase, maxUppercase] = [97, 122, 65, 90]

const lowercaseMap = (character) => {
    return character.charCodeAt(0) - minLowercase - 1
}
const upperCaseMap = (character) => {
    return character.charCodeAt(0) - 38; //65-27
}

const isLowerCase = (char) => (char.charCodeAt(0) >= minLowercase && char.charCodeAt(0) <= maxLowercase);
const isUppercase = (char) => (char.charCodeAt(0) >= minUppercase && char.charCodeAt(0) <= maxUppercase);

let totalSum = 0;
fileContentsArray.forEach(item => {
    let [itemOne, itemTwo] = [item.slice(0, item.length / 2), item.slice(item.length / 2, item.length)]
    let result = itemOne.split("").filter(x => itemTwo.split("").includes(x))[0]
    if (isLowerCase(result.charCodeAt(0))) {
        totalSum += lowercaseMap(result)
    }
    else if (isUppercase(result.charCodeAt(0))) {
        totalSum += upperCaseMap(result)
    }
})
console.log(totalSum)



