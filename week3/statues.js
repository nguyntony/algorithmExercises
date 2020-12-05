// # Given an array of statue sizes in a random order, how many additional statues
// # would you need to arrange each statue so that each statue is only 1 unit taller than the previous one?

// # All statues will have sizes between 0 and 20, and the given array will have a maximum length of 10.

// # Example

// # For the array of statues = [6, 2, 3, 8], the output should be
// # numberStatues(statues) = 3.

// # The completed set of statues needs the sizes 4, 5 and 7.

// The spread operator (…) in JavaScript can expand an array of numbers into the list of arguments, such as with Math.min() & Math.max():

function numberStatues(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let neededStatues = []

    // range function to get the numbers between the min and max
    function range(start, stop) {
        let rangeArr = [];

        while (start <= stop) {
            rangeArr.push(start);
            start++;
        }
        return rangeArr;
    }

    checkArr = range(min, max)

    // I want to append each value that does not exist 
    for (let i = 0; i < checkArr.length; i++) {

        if (arr.includes(checkArr[i])) {
            null
        } else {
            neededStatues.push(checkArr[i])
        }
    }

    let amount = neededStatues.length
    console.log(`Starting statues: ${arr}\nYou need ${amount} statues\nand they are: ${neededStatues}`)
}


// tests
let testArr = [6, 2, 3, 8]
numberStatues(testArr)
console.log("\n**********************\n")
let secondTestArr = [4, 5, 6]
numberStatues(secondTestArr)
console.log("\n**********************\n")
let thirdTestArr = [19, 5, 8, 14, 11]
numberStatues(thirdTestArr)

