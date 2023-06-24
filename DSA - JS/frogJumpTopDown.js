function fun(arr, n, dp)
{
    if (n === 0)
    {
        return 0;
    }

    if (dp[n] != -1)
    {
        return dp[n];
    }

    left = fun(arr, n-1, dp) + Math.abs(arr[n] - arr[n-1]);

    right = Infinity;
    if (n > 1)
    {
        right = fun(arr, n-2, dp) + Math.abs(arr[n] - arr[n-2]);
    }

    dp[n] = Math.min(left, right);

    return dp[n];
}

const arr = [10, 20, 30, 10, 60, 10];
const n = arr.length;
let dp = Array(n+1).fill(-1);
let out = fun(arr, n-1, dp);

console.log(out);