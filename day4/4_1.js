let fileContentsArray = require("fs").readFileSync("input.txt", "ascii").split("\n")

let generateArrayList = (min, max) => {
    let generatedArray = []
    for (var i = min; i <= max; i++) {
        generatedArray.push(i)
    }
    return generatedArray;
}

const arrayIntersection = (array1, array2, ...otherArray) => {
    let commonElement = array1.filter(a => array2.includes(a))
    return otherArray.length > 0 ? arrayIntersection(commonElement, ...otherArray) : commonElement
};

let count = 0;
fileContentsArray.forEach((item, index) => {
    let items = item.split(",")
    let [firstNum, secondNum, thirdNum, fourthNum] = [...items[0].split("-"), ...items[1].split("-")];
    let [first, third] = [generateArrayList(+firstNum, +secondNum), generateArrayList(+thirdNum, +fourthNum)]
    console.log({ first, third })
    let intersected = arrayIntersection(first, third)
    if (intersected.length == first.length || intersected.length == third.length) count++;

});
console.log(count)