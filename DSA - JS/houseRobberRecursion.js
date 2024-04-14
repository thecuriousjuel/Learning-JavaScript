let fun = function(arr, ind){
    if (ind === 0){
        return arr[ind];
    }
    if (ind < 0){
        return 0;
    }
    let pick = arr[ind] + fun(arr, ind-2);
    let notPick = 0 + fun(arr, ind-1);

    return Math.max(pick, notPick);
}

let nums = [2, 1, 3, 9];
let n = nums.length;

let out = fun(nums, n-1);
console.log(out);