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
    const combo = []
    const obj = {}

    for (person of arr1) { // this is going to loop through the names array

        obj.first = person.first;
        obj.last = person.last;
        obj.phone = arr2.find(x => x.last === person.last).phone;

        combo.push(obj);
    }

    return combo;
}

console.log(combine(names, nums))