// check the current environment's global context
console.log(this)

let game = 'basketball'

function sayName() 
{
    let name = "Hitest"
    console.log(this)
}

sayName()

