function fun(arr, ind, dp)
{
    if (ind === 0)
    {
        return arr[ind];
    }
    if (ind < 0)
    {
        return 0;
    }
    if (dp.hasOwnProperty(ind))
    {
        return dp[ind]
    }
    let pick = arr[ind] + fun(arr, ind-2, dp);
    let notPick = 0 + fun(arr, ind-1, dp);

    dp[ind] = Math.max(pick, notPick);
    return dp[ind];
}

let nums = [2, 1, 3, 9, 4];
let n = nums.length;
let dp = {};

let l = fun(nums.slice(0,-1), n-2, dp);

dp = {};
let r = fun(nums.slice(1), n-2, dp);
console.log(Math.max(l, r))
