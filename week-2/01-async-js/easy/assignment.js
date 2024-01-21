const fs = require("fs");
const process = require('process');
//Counter 1
let i = 0;
function timer(){
    setTimeout(()=>{
        console.log(i++);
        timer();
    }, 1000);
}
// timer()

//Counter 2
function timer2(){
    setInterval(()=>{
       console.log(i++);
    }, 1000);
}
//timer2();

//Read From File
function readFromFile(){
    path = process.cwd();
    fs.readFile(`${path}\\file.txt`, 'utf-8',(err, data) => {
        if (err) throw err;
        console.log(data);
    });

    for(let i=0;i<1;i++){
        console.log(i);
    }
}
//readFromFile();

function writeToFile(text){
    path = process.cwd();
    fs.writeFile(`${path}\\file.txt`, text, ()=>{});
}

//writeToFile("Write To File");