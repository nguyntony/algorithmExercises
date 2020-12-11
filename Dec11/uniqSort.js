// if there are duplicates, you need to return an array with no duplicates

const uniqSort = function (arr) {
    let cache = {};
    let result = []

    for (num of arr) {
        // we are asking does this value in the array exist in cache? if not, we want to push that value to result and also create it in our cache, if it does exist then this code does not run. TLDR: this will only occur for unique values
        if (!cache[num]) {
            result.push(num)
            cache[num] = true
        }
    }
    // a is the current value, b is the next value
    result.sort((a, b) => a - b)
    return result
};

let testArr1 = [1, 5, 2, 10]
let testArr2 = [1, 5, 2, 10, 1, 5, 2, 10]
console.log(uniqSort(testArr1))
console.log(uniqSort(testArr2))