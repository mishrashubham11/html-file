const { Schema, model } = require('../connection')  //importing connection file

const mySchema = new Schema({
      title: String,
      image: String,
      user: String,
      likes: { type: Number, default: 0 },  // koi phle se cheez default dena rhta h to boject banate h yaise
      shares: { type: Number, default: 0 }
});

module.exports = model('feed', mySchema)    // user is collection name 