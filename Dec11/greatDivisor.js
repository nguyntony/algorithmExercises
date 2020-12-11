// Write a function that takes two integers as arguments and returns the greatest common divisor of the two numbers. Example,
// console.log(12, 120) // returns 12


const greatDivisor = (n, m) => {
    // it is probably easier to take the lesser of the two numbers and use that as our starting point. 

    // let x;
    // if (n > m) {
    //     x = m
    // }

    // if (m > n) {
    //     x = n
    // }

    let x = (n < m) ? n : m

    // this piece of code is meant to check if x is greater than 0 and we will use x (which is supposed to be the lesser num) will go into modulo of y (which is supposed to be the greater num) and if x goes into y evenly then we will break out of this while loop otherwise we will continue to decrement x until it satisfies the condition

    // we have an issue where all of the code written is meant for divisible numbers. 
    while (x > 0) {
        if ((m % x) === 0 && ((n % x) === 0)) {
            break
        } else {
            x--;
        }
    }

    return x
}

console.log(greatDivisor(12, 120))
console.log(greatDivisor(12, 121))
console.log(greatDivisor(121, 12))
console.log(greatDivisor(20, 4))

// explanation
// the way we went about solving this problem is that we want to grab the lesser number of the two because it is easier to divide the lesser num into the greater one bc if that divides into it evenly then that is your answer such as 12 and 120 

// so after we identify the lesser num of the two we will do a while loop and an if statement, the if statment will contain the break bc it will satisfy the conditions, and here, the conditions are if the lesser number can divide evenly into both nums

// if we cannot satisfy this then we will need to decrement x until it satisfies the if statement above. 

