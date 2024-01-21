/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Resolve");
        }, n);
    });
}

module.exports = wait;

wait(4000).then((data)=>{
    console.log(`Promise Done ${data}`);
});
