const express = require('express');   //req shortcut for import ex.
const Model  = require('../models/feedModel')  //importing user model  dot dot defines file before usermodel

const router = express.Router();    // initializing express

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


    






router.get('/getall',(req,res)=>{
    Model.find()   // find dhoondh ke data lata h db se
    .then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err)
    });             
})




router.get("/getbytitle/:title",(req, res)=>{

    Model.findOne ({title : req.params.title})   //findbyid round braacut leta h ar ye id ka lata h Find on sirf ek ka lata h find sbka ho skta h
   
    .then((result) => {
     res.status(200).json(result)
 }).catch((err) => {
     console.log(err);
     res.status(500).json(err)
 });             

})


module.exports = router