// 3. Return the lowest index at which a value should be inserted into an array
// once it has been sorted. (example: ([1,2,3,5], 1.5) should return 1
// because it's greater than 1 (index 0) and less than 2 (index 1).

const lowIndex = (arr, insertNum) => {
    const filterArr = arr.filter(num => num < insertNum)
    const index = arr.indexOf(filterArr[filterArr.length - 1])
    return index + 1;
}

// const lowestIndex = (array, numberToBeInserted) => {
//     //Create a new array whose items are all less than the number to be inserted
//     const filteredArray = array.filter(item => item<numberToBeInserted);
//     //look at the last item of this new array. What index would it occupy on the original array?
//     const index = array.indexOf(filteredArray[filteredArray.length-1])
//     //the number to be inserted will be inserted therefore right after this index, i.e. index +1
//     return index + 1;
// }
console.log(lowIndex([1, 2, 3, 5, 8, 9], 6.6))
console.log(lowIndex([1, 2, 3, 5, 8, 9], 8.5))
console.log(lowIndex([1, 2, 3, 5, 8, 9], 1.5))
