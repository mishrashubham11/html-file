const express = require('express');   //req shortcut for import ex.
const Model  = require('../models/userModel')  //importing user model  dot dot defines file before usermodel
const jwt = require('jsonwebtoken');   //imp jwt login tym pe ek id dete h taki dubara login ke bad vo pehchane ki hum hi login kiye the
require('dotenv').config(); // imp ISSE KOI BHI CHEXX HUM ENV FIL ME RAKH SKTE H IS FILE KA



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



router.post('/authenticate', (req, res) =>{
Model.findOne(req.body)
.then((result) => {
    if(!result){

        //if not match
        return res.status(401).json({message: 'Invalid Credentials'})


    } else{
           
        const {_id, name, email, password} = result;
        const payload =  {_id, name, email, password};

           jwt.sign(
                payload,
                process.env.JWT_SECRET,
                {expiresIn: '3 days'}, //teen din ke bad bakcent bhul jayega resquest kis user ki thi
                (err, token) => {
                    if(err){
                        console.log(err);
                        return res.status(500).json(err);

                    }else{
                        return res.status(200).json({token})
                    }
                }
           )
    }
}).catch((err) => {
    
});
})



module.exports = router