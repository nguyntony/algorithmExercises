// 4. Write a JavaScript function that accepts 2 arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
// i.e. "digitalcrafts, 't' would return 2

const howMany = (string, target) => {
    const cache = {}

    for (letter of string) {
        if (!cache[letter]) {
            cache[letter] = 1
        } else {
            cache[letter] += 1
        }
    }

    return `${string} has ${cache[target] || 0} ${target}`
}

console.log(howMany("digitalcrafts", "t"))
console.log(howMany("digitalcrafts", "x"))
console.log(howMany("tonynguyen", "n"))