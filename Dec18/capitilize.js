// 1. Write a function that accepts a string as a parameter and converts the first letter of each word to uppercase.
// (i.e. "the quick brown fox" becomes "The Quick Brown Fox")

// const upperWord = (x) => {
//     const xArr = x.split(" ")
//     const newArr = []
//     for (word of xArr) {
//         console.log(word)
//         word.toUpperCase();
//         newArr.push(word)
//     }
//     newArr.join()
//     return newArr;
// }

// console.log(upperWord("the brown fox jumped over the lazy dog"))

const cap = (string) => {
    const arr = string.split(" ")
    // console.log(arr)
    const newStr = []


    for (word of arr) {
        let editedWord = word[0].toUpperCase() + word.slice(1)
        // console.log(editedWord)
        newStr.push(editedWord)
    }

    return `${typeof (newStr.join(" ")), newStr.join(" ")}`

}

console.log(cap("the brown fox"))