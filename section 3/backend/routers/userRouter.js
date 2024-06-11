const express = require('express');   //req shortcut for import ex.

const router = express.Router();    // initializing express

router.get('/add',(req,res)=>{res.send('response from user add')})

module.exports=router