// //express is used to create HTTP server , one way in backend to create 

// // express- i sa libary used to create the HTTP server
// //node defualt library
// const express=require('express')
// const app = express()
// const port = 3000


// function calculate(n){
//     let ans=0;
//     for(let i=0;i<=n;i++){
//         ans+=i;
//     }
//      return ans;
// }
// //req - request , res is response 
// app.get("/",(req,res)=>{
//     //query parameter http://localhost:3000/?n=3
//     const n=req.query.n;
//     const ans = calculate(n); 
//     res.send(`Hi there ans is ${ans}`);
// })


// app.listen(port,()=>{
//      console.log(`Port ${port} is listining.`)
// var users =[{}]

const users = [{
    name: "Chayan",
    kidnsys: [{
        healthy: false
    },
    {
        healthy: true
    }]
},
{
    name: "raj",
    kidnsys: [{
        healthy: true
    }, {
        healthy: false
    }]
}

]
const express = require('express');
const app = express();
const port = 3006

function checkuser(targetUser) {
    return users.find(user => user.name === targetUser)
}
function kidnyDetails(targetUser) {
    let foundUser = checkuser(targetUser)
    console.log(foundUser)
    //let result = {}
    if (foundUser) {
        const totalKidneys = foundUser.kidnsys.length;
        const healthyKidneys = foundUser.kidnsys.filter(health => health.healthy == true).length
        const damagedKidneys = totalKidneys - healthyKidneys;

        return { totalKidneys, healthyKidneys, damagedKidneys };
    } else {
        return {};
    }
}
function addkidnyDetails(targetUser, isHealthy) {
    let foundUser = checkuser(targetUser);
    if (foundUser) {
        foundUser.kidnsys.push({
            healthy: isHealthy
        })

        return 1;
    }
    return -1
}
app.get("/", (req, res) => {
    //write logic
    const user = req.query.name;
    console.log(user)
    const result = kidnyDetails(user);
    if (Object.keys(result).length != 0) {
        res.send(result)
    }
    else {
        res.send(`User Not Found`);
    }
})

//send data in body
//to able to parse the json body

app.use(express.json())
app.post("/", (req, res) => {
    const user = req.query.name;
    console.log(user)
    const isHealthy = req.body.isHealthy;
    const result = addkidnyDetails(user, isHealthy);
    if (result != -1) {
        res.json({
            msg: "Done!"
        })
    }
    else{
        res.send("User Not Found")
    }

})
app.put("/", (req, res) => {
   // to update data 
   const user = req.query.name;
   console.log(user)
   
   
})
app.delete("/", (req, res) => {

})



app.listen(port, () => {
    console.log(`Port ${port} is listining.`)
})