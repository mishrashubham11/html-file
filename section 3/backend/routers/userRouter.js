const express = require('express');   //req shortcut for import ex.
const Model  = require('../models/userModel')  //importing user model  dot dot defines file before usermodel

const router = express.Router();    // initializing express



//create opration
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

//
    

router.get('/getall',(req,res)=>{
    Model.find()   // find dhoondh ke data lata h db se
    .then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err)
    });             
})
//read operation
//:colon denotes url parameter
router.get("/getbycity/:city",(req, res)=>{
       console.log(req.params.city);     //jo user : ke bad nam likha h wahi niche params. ke bad likhna pdega

       Model.find({city : req.params.city})   //city model mwe honi chahiye
      
       .then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err)
    });             

})





router.get('/getbyemail/:email', (req,res)=>{
    Model.findOne({email:req.params.email})  //findone null deta h ager match nhi hoga email to
    .then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err)
    });             
})





router.get("/getbyid/:id",(req, res)=>{

    Model.findById (req.params.id)   //findbyid round braacut leta h
   
    .then((result) => {
     res.status(200).json(result)
 }).catch((err) => {
     console.log(err);
     res.status(500).json(err)
 });             

})



//put operation
router.put('/update/:id', (req,res) => {
    Model.findByIdAndUpdate(req.params.id,req.body,{new:true}) //for update data
    .then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err )
    });
})





//delete operation
router.delete('/delete/:id', (req,res) => {
    Model.findByIdAndDelete(req.params.id) //for delete data
    .then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err )
    });
})







module.exports = router