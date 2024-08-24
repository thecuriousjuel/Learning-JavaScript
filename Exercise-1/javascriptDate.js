// One Way
const date = new Date();

const days = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

console.log(`${days}-${month}-${year}`);

// Second Way
const formatDate = (date = new Date()) => {
    const days = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${days}-${month}-${year}`;
}

const output = formatDate();
console.log(output);