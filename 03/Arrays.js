var countries = ["India", "USA", "Japan", "Russia"]

var states = new Array("Rajasthan", "Delhi", "Mumbai", "Assam")

console.log(countries[0])
console.log(states.length)
states[0] = "Punjab"
console.log(states)

var user = ["hitesh", "email@email.com", 3, 34, true]

console.log(user)
// pops last element
user.pop()
console.log(user)

// appends elements at the first
user.unshift("NEW VALUE")
console.log(user)

// pops first element
user.shift()
console.log(user)

console.log(user.indexOf(3))

console.log(Array.from("hitesh"))
