//const mongoose = require('../connection');
const {Schema,model} = require('../connection');

const myschema = new Schema({
    username : {type : String , default : 'Anonymous'},
    email : String,
    password : String,
    age : Number

});

module.exports = model('users', myschema);