const common = (array1, array2, ...otherArray) => {
  let commonElement = array1.filter(a => array2.includes(a))
  return otherArray.length > 0 ? common(commonElement, ...otherArray) : commonElement
};

console.log(common([1, 2, 3, 4], [2, 4], [1, 2, 4], [2, 3, 4, 5]))