function fun(arr, n)
{
    if (n === 0)
    {
        return 0;
    }

    let left = fun(arr, n-1) + Math.abs(arr[n] - arr[n-1]);
    let right = Infinity;

    if (n > 1)
    {
        right = fun(arr, n-2) + Math.abs(arr[n] - arr[n-2]);
    }

    return Math.min(left, right);
}

const arr = [10, 20, 30, 10, 60, 10];
const n = arr.length;
let out = fun(arr, n-1);

console.log(out);