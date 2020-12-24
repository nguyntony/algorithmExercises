// 2) Given a list of objects of the form { first: ‘firstname’, last: ‘lastname’ }, and a list of objects of the form { last: ‘lastname’, phone: ‘phonenumber’ }, combine the two objects into one object containing all 3 keys.

// For names = [{ first: ‘Dylan’, last: ‘Cooper’}, { first: ‘Jeremy’, last: ‘Roussel’ }], nums = [{ last: ‘Roussel’, phone: ‘832 - 555 - 5555’}, { last: ‘Cooper’, phone: ‘813 - 555 - 5555’ }], combine(names, nums) = [{ first: ‘Dylan’, last: ‘Cooper’, phone: ‘813 - 555 - 5555’}, { first: ‘Jeremy’, last: ‘Roussel’, phone: ‘832 - 555 - 5555’}]

const names = [
    { first: 'Dylan', last: 'Cooper' },
    { first: 'Jeremy', last: 'Roussel' }
]

const nums = [
    { last: 'Roussel', phone: '832 - 555 - 5555' },
    { last: 'Cooper', phone: '813 - 555 - 5555' }
]

const combine = (arr1, arr2) => {
    const combined = []
    const cache = {}

    for (person of arr2) {
        if (!cache[person.last]) {
            cache[person.last] = person.phone
        }
    }

    for (person of arr1) {
        let obj = {}
        obj.first = person.first;
        obj.last = person.last;
        obj.phone = cache[person.last]
        combined.push(obj)
    }
    return combined;
}

console.log(combine(names, nums))