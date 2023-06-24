function fun(arr, n, dp={})
{
    dp[0] = 0;
    right = Infinity;

    for (let i=1; i<n; i++)
    {
        left = dp[i-1] + Math.abs(arr[i] - arr[i-1]);

        if (i > 1)
            right = dp[i-2] + Math.abs(arr[i] - arr[i-2]);
        dp[i] = Math.min(left, right);
    }
    return dp[n-1];
}

let arr = [10, 20, 30, 10, 60, 10];
let n = arr.length;
let out = fun(arr, n);
console.log(out);