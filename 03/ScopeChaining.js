var name = "Biswajit"

console.log(name);

var sayName = () => {
    var name = "Ice Cream"
    console.log(name);
    sayNameTwo()

    var sayNameTwo = () => {
        console.log(name)
    }
}

console.log(name);

sayName()