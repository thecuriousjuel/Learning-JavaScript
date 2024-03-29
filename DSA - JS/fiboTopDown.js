function fib(n , mydict)
{
    if (n <= 1)
        return n;

    if (mydict.hasOwnProperty(n))
    {
        return mydict[n];
    }
    mydict[n] = fib(n-1, mydict) + fib(n-2, mydict);
    return mydict[n];
}

mydict = {};
out = fib(6, mydict);
console.log(mydict);
console.log(out);