// 2. Write a javaScript function that returns a passed string(one word) with letters in alphabetical order.
// Assume NO punctuation, NO spaces, and NO symbols are used in the string!
// i.e. "awesome" becomes "aeemosw"

const sortStr = (string) => {
    const arr = []
    for (letter of string) {
        arr.push(letter)
    }
    return arr.sort().join("")
}

console.log(sortStr("awesome"))