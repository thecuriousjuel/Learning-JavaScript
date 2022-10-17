display = (data) => {
    document.getElementById("header").innerText = data
}

/*
TODO: falsy values

undefined
null -> empty
0
''
NaN
*/

var user = "2";

// Coersion
/*
Type coercion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers). Type conversion is similar to type coercion because they both convert values from one data type to another with one key difference — type coercion is implicit whereas type conversion can be either implicit or explicit.
*/

if (2 == user) {
    display("2 == user")
}
else {
    display("2 not == user")
}

// if (2 === user) {
//     display("2 === user")
// }
// else {
//     display("2 not === user")
// }

// display(4 + 4)
// display(4 + "4")
