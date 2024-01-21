console.log("1");

function promisified(){
    console.log("Inside promise function 3");
    return new Promise(function(resolve){
        console.log("Inside promise callback 4");
        setTimeout(() => {
            console.log("settimeout called 5");
            resolve("Done");
        }, 5000);
    })
}

console.log("2");
promisified().then(function(){
    console.log("promisified then 6");
});