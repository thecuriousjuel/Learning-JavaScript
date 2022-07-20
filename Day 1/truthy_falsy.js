// TODO: falsy values are defined below
// undefined
// null
// 0
// ''
// NaN

let user;

console.log(user)

user = null;

console.log(user)

if (user)
{
    console.log('True')
}
else
{
    console.log('False')
}


// coercion
user = "2"

if (2 == user)
{
    console.log("Condition is True")
}
else
{
    console.log("Condition is False")
}

// Put a strict check with data type

user = "2"

if (2 === user)
{
    console.log("Condition is True")
}
else
{
    console.log("Condition is False")
}


