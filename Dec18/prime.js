// 3. Write a javaScript function that accepts a number as a parameter and checks if the number is prime or not (true or false)
// A prime number is greater than 0 & 1, it only has two factors, itself and 1

const isPrime = (num) => {
    const max = Math.round(Math.sqrt(num))

    for (let i = 2; i < max; i++) {
        if (num % i === 0) {
            return `${num} isPrime? ${false} because it is divisible by ${i}`
        }
    }

    return `${num} isPrime? ${true}`
}

console.log(isPrime(119))
console.log(isPrime(957))
console.log(isPrime(144))
console.log(isPrime(7))


