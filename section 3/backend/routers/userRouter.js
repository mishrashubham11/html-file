const express = require('express');   //req shortcut for import ex.

const router = express.Router();    // initializing express

router.post('/add',(req,res)=>{
    console.log(req.body);
    
    res.send('response from user add')})


    

router.get('/getall',(req,res)=>{res.send('response from user getall')})

module.exports = router