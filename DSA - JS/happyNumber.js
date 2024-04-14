function fun(n)
{
    let s = 0;
    let d;
    while (n > 0)
    {
        d = n % 10;
        s = s + d ** 2;
        n = n / 10;
    }
    return s
}


function ishappy(n)
{
    let count = 0;
    while (count < 10)
    {
        n = fun(n);
        if (n === 1)
            return true 
        count++;
    }
    return false
}

let n = 5;
let out = ishappy(n);
console.log(out)