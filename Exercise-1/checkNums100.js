const checkNums100 = (n1, n2) => n1 === 100 || n2 === 100 || (n1 + n2) === 100;

console.log(checkNums100(60, 100));
console.log(checkNums100(60, 40));
console.log(checkNums100(60, 30));
console.log(checkNums100(100, 30));