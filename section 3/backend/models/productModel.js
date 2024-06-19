const { Schema, model } = require('../connection')  //importing connection file


const mySchema = new Schema({
    name: String,
    model: String,
    version: String,
    review: { type: Number, default: 0 },  // koi phle se cheez default dena rhta h to boject banate h yaise
    createdAt: { type: Date, default: Date.now }  // date.now exact date deta h kb koi cheez bni thy db me
});

module.exports = model('product', mySchema)    // product is collection name 