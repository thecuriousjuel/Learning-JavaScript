let n = 5;

let dp = {
    0: 0,
    1: 1
};

for (let i=2; i<=n; i++)
{
    dp[i] = dp[i-1] + dp[i-2];
}

console.log(dp[n]);