let fun = (arr, n, k) => {
    if (n === 0){
        return 0;
    }

    let minEnergy = Infinity;
    let out;
    for (let i=1;i<=k;i++){
        if (n-i >= 0)
        {
            out = fun(arr, n-i, k) + Math.abs(arr[n] - arr[n-i]);
            minEnergy = Math.min(minEnergy, out);
        } 
    }
    return minEnergy;
}

let arr = [30, 10, 60, 10, 60, 50];
let n = arr.length;
let k = 3;

let out = fun(arr, n-1, k);
console.log(out);