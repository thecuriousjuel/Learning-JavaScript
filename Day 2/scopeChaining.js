let name = "Biswajit"

console.log(name);

function sayName()
{
    let name = "BB"
    console.log(name)
    sayNameTwo()

    function sayNameTwo()
    {
        console.log(name)
    }
}

sayName()
