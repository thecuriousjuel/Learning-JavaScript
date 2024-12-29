const lotteryPromise = new Promise(function (resolve, reject)
{
    setTimeout(function ()
    {
        const num = Math.random()
        if (num >= 0.5)
        {
            resolve(`You WON! ${num}`)
        } else
        {
            reject(`You LOST! ${num}`)
        }
    }, 2000)
})

lotteryPromise.then(response =>
{
    console.log(response)
}).catch(error => console.log(error))