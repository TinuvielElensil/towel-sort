module.exports = function towelSort (matrix) {
  let newArray = []
  if (matrix == null) {
    return newArray
  }
  matrix.forEach((element, index) => {
    if (index % 2 == 0) {
      element.forEach((element) => {
        newArray.push(element)
      })
    }
    if (index % 2 == 1) {
      element.reverse().forEach((element) => {
        newArray.push(element)
      })
    }
  });
  return newArray
}
