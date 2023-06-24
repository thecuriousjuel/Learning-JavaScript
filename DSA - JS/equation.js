function fun()
{
    for(let i=0; i<100;i++)
    {
        for(let j=1;j<100;j++)
        {
            if (i+j === 10 && 3*i+5*j === 42)
                return [i, j];

            if (i+j > 10 || 3*i+5*j > 42)
                break;
        }
    }
    return [null, null];
}

let [x, y] = fun()

console.log(`x=${x}, y=${y}`);