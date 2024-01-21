//Creating an http server
// express
//node default library = no
const express  = require("express");
const app = express();

function sum(n){
    let ans = 0;
    for(let i=0;i<n;i++)
    {
        ans+=i;
    }
    return ans;
}
app.use(express.json());
app.get("/sum", function(req,res){
    const n = req.query.n;
    res.send("Hi Your sum is:"+sum(n));
})

const user = [
    {
        name: "Kidney",
        kidney:[{healthy:false}]
    }
]

app.get("/", function(req, res){
    const kidney = user[0].kidney;
    let numberOfKidney = kidney.length;
    var numOfHealthyKidney = 0;
    for(let i=0;i<numberOfKidney;i++){
        if(kidney[i].healthy)
        {
            numOfHealthyKidney+=1;
        }
    }
    const numOfUnHealthyKidney = numberOfKidney - numOfHealthyKidney;
    console.log(numberOfKidney+":"+numOfHealthyKidney+":"+numOfUnHealthyKidney);
    res.json(
    {
        numberOfKidney,
        numOfUnHealthyKidney,
        numOfHealthyKidney
    })
})

app.post("/", function(req, res){
    let isHealthy = req.body.isHealthy;
    user[0].kidney.push({healthy:isHealthy});
    res.json({msg:"Done!"});
})

app.put("/", function(req, res){
    for(let i=0;i<user[0].kidney.length;i++)
    {
        user[0].kidney[i] = true;
    }
    res.json({msg:"Done!"});
})



app.delete("/", function(req, res){
    if(!isUnHealthyKidneyLeft())
    {
        res.status(411).json({
            msg:"You have no unhealthy kidney left"
        });
    }
    else{
        let newKidney = [];
        for(let i=0;i<user[0].kidney.length;i++)
        {
            if(user[0].kidney[i].healthy)
            {
                newKidney.push({
                    healthy:true
                });
            }
        }
        user[0].kidney = newKidney;
        res.json({msg:"Done!"});
    }
})

function isUnHealthyKidneyLeft() {
    for(let i=0;i<user[0].kidney.length;i++)
    {
        if(user[0].kidney[i].healthy ==false)
        {
            return true;
        }
    }
    return false;
}

app.listen(3001);
