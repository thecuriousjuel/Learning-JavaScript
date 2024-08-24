/* One Way */
let word = 'abcdz';
let newWord = '';
let asciiValue;

for (let i = 0; i < word.length; i += 1)
{
    // console.log(word.charCodeAt(i));
    // console.log(String.fromCharCode(word[i]));

    asciiValue = word.charCodeAt(i) + 1;

    if (asciiValue === 91) 
    {
        asciiValue = 65;
    }
    else if (asciiValue === 123)
    {
        asciiValue = 97;
    }
    newWord += String.fromCharCode(asciiValue);
}
console.log('My Solution : ' + newWord);

/* Second Way */

const moveCharsForward = (str) => str
    .split('')
    .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
    .join('');


const output = moveCharsForward(word)
console.log('YouTube Solution : ' + output);