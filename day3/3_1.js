const getFileContentsLineSplitted = (filename) => {
    return require("fs").readFileSync("three.txt", "ascii").split("\n");
}

const lowercaseMap = (character) => {
    return character.charCodeAt(0) - 38
}
const upperCaseMap = (character) => {
    return character.charCodeAt(0) - 96;
}

const arrayIntersection = (array1, array2, ...otherArray) => {
    let commonElement = array1.filter(a => array2.includes(a))
    return otherArray.length > 0 ? arrayIntersection(commonElement, ...otherArray) : commonElement
};

const isLowerCase = (commonElement) => (commonElement.charCodeAt(0) >= 97 && commonElement.charCodeAt(0) <= 122);
const isUppercase = (commonElement) => (commonElement.charCodeAt(0) >= 65 && commonElement.charCodeAt(0) <= 90);


const calculateSum = (fileContentsArray) => {
    let totalSum = 0;
    for (let index = 0; index < fileContentsArray.length; index += 3) {
        let [array1, array2, array3] = [fileContentsArray[index], fileContentsArray[index + 1], fileContentsArray[index + 2]];
        let commonElement = arrayIntersection(array1.split(""), array2.split(""), array3.split(""))[0]
        totalSum += isLowerCase ? lowercaseMap(commonElement) : 0;
        totalSum += isUppercase ? upperCaseMap(commonElement) : 0;
    }
    return totalSum;
}

let fileContentsArray = getFileContentsLineSplitted("three.txt")
console.log(calculateSum(fileContentsArray))



