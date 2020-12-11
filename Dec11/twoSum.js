// 2. From an unsorted array, check whether there are any two numbers that
// will sum up to any given number (example: ([1,5,7,8,4,3,9] ,6) returns
// true & ([1,5,7,8,4,3,9] , 3) returns false)

const twoSum = (arr, target) => {
    // I need to loop through the array and see if the two numbers added up together will equal the target. 
    // what I can do is subtract each num in the array from the target and see if then any second num will add to it and reach the target. 
    let remainder
    let result

    for (num of arr) {

        remainder = target - num
        arr.shift()
        result = false

        if (arr.includes(remainder)) {
            result = true;
            return result
        }
    }
    return false
}

const nums = [1, 5, 7, 8, 4, 3, 9]
const nums2 = [1, 5, 7, 8, 4, 3, 9]
const nums3 = [1, 5, 7, 8, 4, 3, 9]
const nums4 = [1, 5, 7, 8, 4, 3, 9]


// console.log(twoSum(nums, 6))
// console.log(twoSum(nums2, 3))
// console.log(twoSum(nums3, 10))
// console.log(twoSum(nums4, 11))
console.log(twoSum([3, 1, 4, 5, 7, 6, 8], 6))
// console.log(twoSum([3, 5, 7, 6, 8, 3], 6))


// jeremy recommends using a set for this examples. 