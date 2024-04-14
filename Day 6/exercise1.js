let sum = (...args) => {
    if (args.length === 1 && Array.isArray(args[0])){
        args = [...args[0]];
    }
    return args.reduce((a, b) => a+b)
} 

console.log(`The output is ${sum(1, 2, 3, 4)}`);
console.log(`The output is ${sum([1, 2, 3, 5])}`);
