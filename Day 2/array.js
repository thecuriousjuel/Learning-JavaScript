// () -> parenthesis
// {} -> braces
// [] -> brackets

let name = ['a', 'b', 'c', 'd', 'e', 'f']

console.log(name)
console.log(name.length)

for (let i = 0; i<= name.length ; i++) 
{
    console.log(name[i])
}

name[0] = 'Punjab'
console.log(name)

console.log(name[-1])

let user = ['Biswajit', 'email@email.com', 3, 34, true]

console.log(user)

user.pop()
console.log(user)

// Add values to the front
user.unshift("NEW VALUE")
console.log(user)

// remove values from the front
user.shift()
console.log(user)


console.log(user.indexOf(3))

console.log(user.indexOf(8))

console.log(Array.from('Biswajit'))

