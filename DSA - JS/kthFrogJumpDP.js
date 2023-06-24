let fun = (arr, n, k, dp) => {
    if (n == 0)
    {
        return 0;
    }

    if (dp[n] != -1){
        return dp[n];
    }
    let minEnergy = Infinity;
    let out;
    for(let i=1; i<=k; i++){
        if (n - i >= 0){
            out = fun(arr, n-i, k, dp) + Math.abs(arr[n] - arr[n-i]);
            minEnergy = Math.min(minEnergy, out);
        }
    }
    dp[n] = minEnergy;
    return dp[n];

}

let arr = [30, 10, 60, 10, 60, 50];
let n = arr.length;

let dp = Array(n).fill(-1);
let k = 5;
let out = fun(arr, n-1, k, dp);

console.log(out);