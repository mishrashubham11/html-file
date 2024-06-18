const { Schema, model } = require('../connection')  //importing connection file

const mySchema = new Schema({
      name: String,
      email: String,
      password: String,
      city: { type: String, default: 'unknown' },
      createdAt: { type: Date, default: Date.now }  // date.now exact date deta h kb koi cheez bni thy db me


})

module.exports = model('user', mySchema)    // user is collection name 