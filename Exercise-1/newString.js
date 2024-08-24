// One Way
let string = 'New! is a string!';

let newString = string.slice(0, 4);

if(newString !== 'New!')
{
    console.log('New!' + string);
}
else
{
    console.log(string);
}

//Another way

const addNew = (str) => str.indexOf('New!') === 0 ? str : `New!${str}`


console.log(addNew(string))