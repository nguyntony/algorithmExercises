// # 1. Given an array of integers, find if the array contains any duplicates.
// # -- Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
// # -- LeetCode link: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/

function containsDuplicate(numArr) {
    // iterate through the array
    let result;
    const checkArr = new Set(numArr);

    if (numArr.length !== checkArr.size) {
        result = true;
    } else {
        result = false;
    }
    console.log(numArr.length);
    console.log(checkArr.size);
    console.log(result)
}

let testArr = [1, 2, 3, 4, 5, 1]
containsDuplicate(testArr)