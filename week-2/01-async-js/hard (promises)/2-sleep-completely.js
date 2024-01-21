/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

async function sleep(milliseconds) 
{
    let promise = await new Promise((resolve)=>{
        console.log(resolve);
        setTimeout(()=>{
            resolve("wait over");
            console.log(resolve);
        }, milliseconds);
    });
    return promise;
}
module.exports = sleep;
sleep(4000).then((data)=>{
    console.log(data);
    console.log("promise called");
});
