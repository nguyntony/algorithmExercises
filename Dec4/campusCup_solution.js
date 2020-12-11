emails4 = ["a@rain.ifmo.ru", "b@rain.ifmo.ru", "c@rain.ifmo.ru", "d@rain.ifmo.ru",
    "e@rain.ifmo.ru", "f@rain.ifmo.ru", "g@rain.ifmo.ru", "h@rain.ifmo.ru", "i@rain.ifmo.ru",
    "j@rain.ifmo.ru", "k@rain.ifmo.ru", "l@rain.ifmo.ru", "m@rain.ifmo.ru", "n@rain.ifmo.ru",
    "o@rain.ifmo.ru", "p@rain.ifmo.ru", "q@rain.ifmo.ru", "r@rain.ifmo.ru", "s@rain.ifmo.ru",
    "t@rain.ifmo.ru", "u@rain.ifmo.ru", "v@rain.ifmo.ru", "w@rain.ifmo.ru", "x@rain.ifmo.ru",
    "y@rain.ifmo.ru", "a@mit.edu.ru", "b@mit.edu.ru", "c@mit.edu.ru", "d@mit.edu.ru", "e@mit.edu.ru",
    "f@mit.edu.ru", "g@mit.edu.ru", "h@mit.edu.ru", "i@mit.edu.ru", "j@mit.edu.ru", "k@mit.edu.ru",
    "l@mit.edu.ru", "m@mit.edu.ru", "n@mit.edu.ru", "o@mit.edu.ru"]


const emailSplit = (email) => {
    return email.split('@')[1]
}

const campusCup = (emails) => {
    // for each email we want to split at the @ sign
    const splitEmails = emails.map(emailSplit)
    console.log(splitEmails)

    const schools = [...new Set(splitEmails)]
    console.log(schools)

    // next we want to count how many times an email appears 
    // for each value we can reduce it
    const count = (arr, value) => arr.reduce((a, v) => (v === value ? a + 1 : a), 0)
    console.log(count(splitEmails, schools[0]))


    const key =
    {
        "100": 3,
        "200": 8,
        "300": 15,
        "500": 25
    }

    const points = Object.keys(key)

    console.log(points)


    const data = [];
    for (let school of schools) {
        let eachData = {
            "school": school,
            "count": count(splitEmails, school) * 20,
            "gb": null
        }
        data.push(eachData)
    }
    console.log(data)

    for (let school of data) {
        for (point in key) {
            if (school.count >= Number(point)) {
                school.gb = key[point]
            }
        }
    }

    // now I need to sort 
    const sortedSchools = data.sort((a, b) => {
        return b.gb - a.gb
    })

    console.log(sortedSchools)

    const schoolNames = sortedSchools.map(school => school.school)
    console.log(schoolNames)

}
// console.log(campusCup(emails4))
campusCup(emails4)

// still need to sort the strings lexo order.
// also need to clean up some code and make it more readable. 