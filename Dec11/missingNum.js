// 1. From an unsorted array of numbers 1 to 100 excluding one number, how
// would you find the missing number?

const _ = require('lodash')
let sampleArr = []
for (let i = 1; i < 101; i++) {
    sampleArr.push(i)
}
sampleArr.splice(21, 1)
let shuff = _.shuffle(sampleArr)


const missingNum = (arr) => {
    const start = Math.min(...arr);
    const end = Math.max(...arr);
    const allNums = [];
    let missingNum;

    const range = (start, end) => {
        for (let i = start; i <= end; i++) {
            allNums.push(i);
        }
    };
    range(start, end);

    for (num of allNums) {
        if (!arr.includes(num)) {
            missingNum = num;
        }
    }

    // return `min${start}  max${end}
    // all${allNums} missing number is ${missingNum}`

    return `the missing number is ${missingNum}`;
};

nums = [10, 7, 3, 8, 2, 1, 4, 5, 6];
nums2 = [10, 7, 3, 8, 2, 1, 9, 5, 6];

console.log(missingNum(nums));
console.log(missingNum(nums2));
console.log(missingNum(shuff))



// const arrayChecker = (mixed, good) => {
// 	let lostNumber;
// 	if (!good.every((n) => mixed.includes((lostNumber = n)))) {
// 		return lostNumber;
// 	}
// 	return lostNumber;
// };


// let longArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let missingArr = [1, 2, 3, 4, 6, 7, 8, 9, 10]
// let sumOfLongArr = longArr.reduce((a, b) => a + b, 0);
// let sumOfMissingArr = missingArr.reduce((a, b) => a + b, 0)
// let missingNumber = sumOfLongArr - sumOfMissingArr
// console.log(missingNumber)


// # // 1.
// array = [2, 99,4, 3, 62, 6,7, 90,9, 10, 11, 12, 20, 14, 15, 16,17, 18, 19, 13, 21, 22, 29, 24, 25,26, 27, 28, 23, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 48, 41, 43, 44, 45, 46, 47, 42, 49, 50, 51, 52, 53, 54, 59, 56, 57, 58, 55, 60, 61, 5, 63, 69, 65, 70, 67, 68, 64, 66, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 8, 91, 94, 93, 92, 95, 96, 100, 98, 1, 97]
// array.sort()
// # print (array)
// n = 1
// for el in array:
//     if n == el:
//         n += 1
//     else:
//         print(n)
//         break