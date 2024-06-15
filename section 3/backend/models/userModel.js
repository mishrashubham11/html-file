const {Schema, model} =  require('../connection')  //importing connection file

const mySchema= new Schema({
      name: String,
      email: String,
      password: String

})

module.exports = model('user',mySchema)    // user is collection name 