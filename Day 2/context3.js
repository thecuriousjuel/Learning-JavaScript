let tipper = (a) =>
{
    // convert to int
    let bill = parseInt(a);
    console.log(bill+10)
}

tipper('80')


// code hoisting

// function <name> {}
// 

 
let sayName = () =>
{
    let name = "Mr. H"
    console.log(name)
}


