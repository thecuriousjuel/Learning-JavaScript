const arr = [1,4,5,6,3,8]

console.log(arr.fill(0))
console.log(arr.fill('h'))

console.log(arr.fill("empty", 2, 4))

// Filter operations

const myNumbers = [23, 24, 25, 67, 77]

const result = myNumbers.filter((e) => e % 2 === 0)
console.log(result)

