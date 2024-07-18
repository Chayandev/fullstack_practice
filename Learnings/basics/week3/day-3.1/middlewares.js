const express = require('express');
const app = express();

const zod = require('zod');

const schema = zod.array(zod.number());  // zod is used to define sceam and check the scema 

//middleware functions
function userMiddleware(req, res, next) {
    if (username != 'Chayan' && password != "pass") {
        res.status(403).json({
            msg: "User dose'nt exist!"
        });
    } else {
        next();
    }
}

function kidneyMiddleware(req, res, next) {
    if (kidneyId != 1 && kidneyId != 2) {
        res.status(411).json({
            msg: "Incorrect inputs"
        });
    } else {
        next();
    }
}

// app.use(express.json) is also a middleware
// this is user for req.body as the can have diffrent type of data.

/*

app.get('/health-checkup', (req, res) => {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;
    console.log(username)
    console.log(password)
    console.log(kidneyId)

    /**** 
    **********dumb way to do this 

    if (username != 'chayan' && password != 'pass') {
        res.status(403).json({
            msg: "User dose'nt exist"
        });
        return
    }
 
    if (kidneyId != 1 && kidneyId != 2) {
        res.status(411).json({
            msg: "wrong inputs!"
        });
        return;
    }
    //do somthing
    res.send("Your kidney is healthu!")
 
    
    //checks

    // uif i use fucntion it will be sonting good but not the best ane so we need middleware
    //becasue for fucntion is als there is more code

    // use middleware
});
*/

//with middleware

// app.get('/health-checkup', userMiddleware, kidneyMiddleware, (req, res) => {
//     //do somting  


// })
app.use(express.json())
app.post('/health-checkup-zod', (req, res) => {
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    console.log(kidneys)
    res.send({
        response
    })
})

//global chatch
// this is the gloabl cathc if there is no input validation or some exception occured then this
//will simple through the message , this is the error handeling middleware
app.use((err, req, res, next) => {
    res.json({
        msg: "Sorry somting went wrong!"
    })
})




app.listen(3000, () => {
    console.log(`Port 3000 is listning!`)
});