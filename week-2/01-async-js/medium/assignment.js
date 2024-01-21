const fs = require("fs");
const process = require('process');

function cleanSpaceFromFile(){
    path = process.cwd();
    fs.readFile(`${path}\\file.txt`, 'utf-8',(err, data) => {
        if (err) throw err;
        data = data.split(" ");
        const result = data.filter((word) => (word!=" " || word!=''));
        console.log(result)
        let ans="";
        for(let i =0;i<result.length;i++)
        {
            if(result[i]!=""){
                ans+=result[i]+" ";
            }
        }
        ans = ans.trim();
        console.log(ans)
        fs.writeFile(`${path}\\file.txt`, ans, ()=>{});
    });
}

//cleanSpaceFromFile() 
let j =0;
function currentTime(){
    var now = new Date();
    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    setInterval(()=>{
        if(sec==60)
        {
            min++;
            sec=0;
        }
        if(min==60){
            hour++;
            min=0;
        }
        if(hour==24)
        {
            hour==0;
        }
        let currentUnit = (hour>12?"PM":"AM");
        console.log(`Time is - ${hour}:${min}:${sec} ${currentUnit}`);
        sec++;
        
    },1000);
}

//currentTime();