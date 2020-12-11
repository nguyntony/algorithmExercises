// const isUnique = (arr) => {
//     let result = true;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (i !== j && arr[i] === arr[j]) {
//                 result = false;
//             }
//         }
//     }
//     return result;
// };

const isUnique = (arr) => {

    let cache = {};
    let result = true;

    for (let i = 0; i < arr.length; i++) {

        if (cache[arr[i]]) {    // cache[arr[i]], this is what it looks like cache[1] so i is the index and it will access the array with the index and we are using that number that it returns from the array as a key in the cache object
            return false;
        } else {
            cache[arr[i]] = true;
        }
    }
    return result;
};

let testArr = [1, 2, 3, 3]
console.log(isUnique(testArr))