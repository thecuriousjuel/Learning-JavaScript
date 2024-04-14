let nums = [1,1,1,1,1];

let temp = [nums[0]];

for(let i = 1; i < nums.length; i++)
{
    temp.push(temp[i-1] + nums[i]);
}

console.log(temp);