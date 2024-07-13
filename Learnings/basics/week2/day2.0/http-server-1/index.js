//create ahttps server

const express=require('express');
//const port =3000  //or process.env.PORT || 3000 , enviromnet varible
const app = express();
const port = process.env.PORT || 3000
const bodyParser=require("body-parser")
//middlewares


//app.use(bodyParser.json());  //if the boday have json this will extract this json

app.use(express.json())

// app.get('/',(req,res)=>{
//     //res.send('Hellow world');
//     res.send('<b>Hi There </b>')
// })

//  app.get('/route-handler',(req,res)=>{
//     res.json({
//         name:"Chayan",
//         age:20
//     })
//  })


/*

app.post('/conversations',(req,res)=>{
   // console.log(req.headers)
    // console.log(req.body)  //express not handel the body need use body parser
   const mesaage=req.body.message;
   console.log(req.body)
   console.log(mesaage)
    res.send({
        msg:"2+2 = 4"
    })

})
    */
//mechine learning thing
app.post('/backend-api/conversations',(req,res)=>{
    const message=req.body.message
    console.log(message)

    res.json({
        output:"2+2 = 4"
    })
})

app.listen(port,()=>{
    console.log(`Example app listining on port ${port}`);
})

//fetch 
// is a spi to fetch data from some where.
// fetch ("http://localhost:3000/",{method:"POST"}).then(func)


