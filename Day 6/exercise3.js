let occurence = (arr, number) => {
    if (!Array.isArray(arr)){
        throw new Error(`Array is not passed. Found: ${typeof arr}`) 
    }
    return arr.reduce((accumulator, current) => {
        const temp = (current === number) ? 1: 0;
        return accumulator + temp;
    }, 0)
}

const arr = [1, 0, 1, 2, 1, 5, 7, 1, 3];

try{
    console.log(occurence(arr, 1));
    console.log(occurence(true, 1));
}catch (err){
    console.log(err.message);
}
