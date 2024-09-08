// const iterator = [1, 2, 3].values();
// console.log(iterator);

// const weekdays = ['mon', 'tue', 'wed'];
// const opening = {
//     [weekdays[0]]: 'a',
//     [weekdays[1]]: 'b',
// }

// console.log(opening)

const hours = {
    'thu': {
        'open': 10,
        'close': 20
    },
    'fri': {
        'open': 15,
        'close': 23
    }
}

const opening = {
    'id': 1,
    ...hours,
    hours,
    hours: hours
}

console.log(opening)
