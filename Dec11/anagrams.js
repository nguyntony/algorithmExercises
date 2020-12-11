// Check to see if two provided strings are anagrams of each other. One string is an anagram of another if it uses the same characters im the same quantity. Only consider characters, not spaces or punctuation. Consider capital letters to be the same lower case

const anagram = (str1, str2) => {
    let cache1 = {}
    let cache2 = {}
    let editedStr1 = str1.replace(" ", "").toLowerCase()
    let editedStr2 = str2.replace(" ", "").toLowerCase()

    for (letter of editedStr1) {
        if (!cache1[letter]) {
            cache1[letter] = 1;

        } else {
            cache1[letter] += 1
        }
    }

    for (letter of editedStr2) {
        if (!cache2[letter]) {
            cache2[letter] = 1;

        } else {
            cache2[letter] += 1
        }
    }

    if (Object.keys(cache1).length !== Object.keys(cache2).length) {
        return false
    }

    for (let char in cache1) {
        if (cache1[char] !== cache2[char]) {
            return false
        }
    }

    return true
}

console.log(anagram("hello", "olleh"))
console.log(anagram("hye", "bye"))

