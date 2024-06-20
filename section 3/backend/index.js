const express = require('express'); // import express

const userRouter = require('./routers/userRouter')  // import userrouter file
const feedRouter = require('./routers/feedRouter')  // import feedrouter file
const productRouter = require('./routers/productRouter')  // import productrouter file

const cors= require('cors')  //importiong cors

 // initialize express

 const app= express()

 const port = 5000   // server port

 //middleware
 //handling cors
 app.use(cors({
    origin:['http://localhost:3000']   //frontend server conect to bckend
 }))
 app.use(express.json())   // convert js into json code

 app.use('/user',userRouter)   // /user likhenge to router wala khulega add mhi likha to index wala server add chalega
 app.use('/feed',feedRouter)    //feedrouter file
 app.use('/product', productRouter )  //pasting file of productrouter

 //route or endpoint '' it decide to accept request''
 app.get('/', (req,res)=>{
    res.send('response from express')}) // res.send use for give response to req



 app.listen(port,()=>{console.log('server started'); }) // run server

 //add '' this work after put slace after port''

app.get('/add',(req,res)=>{
    res.send('response from add')
})

//getall
app.get('/getall',(req,res)=>{
    res.send('response from all')
})


//update
app.get('/update',(req,res)=>{
    res.send('response from update')
})

//delete
app.get('/delete',(req,res)=>{
    res.send('response from delete')
})