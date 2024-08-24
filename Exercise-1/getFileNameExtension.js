const getFileNameExtension = (str) => str.slice(str.lastIndexOf('.')+1);

console.log(getFileNameExtension('index.html'));
console.log(getFileNameExtension('index.config.js'));