// function isEven(element)
// {
//     if (element % 2 === 0)
//     {
//         return true
//     }
//     return false
// }

let isEven = (element) =>
{
    return element % 2 === 0
}

console.log(isEven(6))

let result = [2,3,6,8].every(isEven)
console.log(result)

result = [2,4,6,8].every((e) => e % 2 === 0)

console.log(result)

