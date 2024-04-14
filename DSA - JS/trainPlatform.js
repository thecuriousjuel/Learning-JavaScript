let start = [900, 1235, 1100];
let stop = [1000, 1200, 1240];

start.sort((a, b) => a - b)
stop.sort((a, b) => a - b)

console.log(start);
console.log(stop);

let i=0, j=0, p=0, mp=0;

while (i < start.length)
{
    if (start[i] <= stop[j])
    {
        p += 1;
        i += 1;
    }
    else
    {
        p -= 1;
        j += 1;
    }
    mp = Math.max(mp, p);
}

console.log(mp);