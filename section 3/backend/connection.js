const mongoose = require('mongoose');   //req with mongoose

const url= "mongodb+srv://shubham8756:8756@cluster0.1h3p55f.mongodb.net/shubham?retryWrites=true&w=majority&appName=Cluster0"  //conection string from mongodb site link paste  here and password paste slace ar ? ke beech me db nam likha jata h

//asynchronus function
mongoose.connect(url) // connecting db

.then((result) => {          //type thenc then this syntax arrived and it this erron handling then and catch
    console.log('database connected');
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose ;   // if we import there(usermodel me conection) the here we must export









