let fun = function(arr, ind, dp){
    if (ind === 0)
    {
        return arr[ind];
    }
    if (ind < 0)
    {
        return 0;
    }
    if (dp[ind] != -1)
    {
        return dp[ind];
    } 

    let pick = arr[ind] + fun(arr, ind-2, dp);
    let notPick = 0 + fun(arr, ind-1, dp);

    dp[ind] = Math.max(pick, notPick);
    return dp[ind];
}

const nums = [2, 1, 3, 9];
let n = nums.length;
let dp = Array(n).fill(-1);

let out = fun(nums, n-1, dp);
console.log(out); 