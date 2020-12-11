const cache = { 9: 90 };

const memoTime10 = (n) => {
    if (n in cache) {
        console.log(`Fetching from cache ${n}`)
        return cache[n]
    } else {
        cache[n] = n * 10
        console.log(`Calculating results`)
    }

    return cache[n]
}

memoTime10(9)
memoTime10(9)
memoTime10(10)
memoTime10(10)