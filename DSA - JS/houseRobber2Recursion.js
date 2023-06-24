function fun(arr, ind)
{
    if (ind === 0)
    {
        return arr[ind];
    }
    if (ind < 0)
    {
        return 0;
    }
    let pick = arr[ind] + fun(arr, ind-2);
    let notPick = 0 + fun(arr, ind-1);

    return Math.max(pick, notPick);
}

let nums = [2, 1, 3, 9, 3];
let n = nums.length

let l = fun(nums.slice(0, -1), n-2)
let r = fun(nums.slice(1), n-2)

console.log(Math.max(l, r));
