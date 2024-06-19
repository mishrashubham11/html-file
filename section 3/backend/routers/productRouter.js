const express = require('express');
const Model  = require('../models/productModel')  //importing product model  dot dot defines file before model

const router = express.Router(); //initiallizing express

router.post('/add',(req,res)=>{
    console.log(req.body);

    new Model(req.body).save()   // for saving in database
    
    .then((result) => {
        res.status(200).json(result);   // 200 is for success
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err); 
    });
})












module.exports = router