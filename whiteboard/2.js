// 1. Check if a word is a palindrome or not. A palindrome is a word that is spelt the exact same way if you reverse it. Your function should return true or false.
// Ex) racecar reversed is still racecar
// Ex) kayak reversed is still kayak
// console.log(palindrome('racecar')) 
// // expected output: True

// 1. we need to create a function that will accept a string
// 2. we need to reverse the string then make sure that the letters are the same reversed.
// 3. can we do this using a cache system?

const palidrome = str => {
    str = str.toLowerCase().split("")
    cache = {}

    for (idx in str) {
        // if (cache[letter]) { // this may need to be rewritten because it is not functioning as expected
        //     cache[letter] = letter
        // }
        cache[idx] = str[idx]

    }

    return cache
}

console.log(palidrome("racecar"))


// 2. Given two variables that are equal to any integer. Swap the values of those variables without using a third variable
//let a = 1;
// let b = 2;

// a = a + b;
// b = a - b;
// a = a - b;

// a; // => 2
// b; // => 1



// 1) Given an array of strings, return another array containing all of its longest strings.
// For inputArray = [“aba”, “aa”, “ad”, “vcd”, “aba”], the output should be allLongestStrings(inputArray) = [“aba”, “vcd”, “aba”].
// 2) Given a list of objects of the form {first: ‘firstname’, last: ‘lastname’}, and a list of objects of the form {last: ‘lastname’, phone: ‘phonenumber’}, combine the two objects into one object containing all 3 keys.
// For names = [ {first: ‘Dylan’, last: ‘Cooper’}, {first: ‘Jeremy’, last: ‘Roussel’} ], nums = [ {last: ‘Roussel’, phone: ‘832-555-5555’}, {last: ‘Cooper’, phone: ‘813-555-5555’ } ], combine(names, nums) = [ {first: ‘Dylan’, last: ‘Cooper’, phone: ‘813-555-5555’}, {first: ‘Jeremy’, last: ‘Roussel’, phone: ‘832-555-5555’} ]