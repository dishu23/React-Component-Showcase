//const mongoose = require('../connection');
const {Schema,model} = require('../connection');

const myschema = new Schema({
    title : String,
    descriptiom : String,
    uploadedBy : String,
    image : String,
    code : String,
});

module.exports = model('components', myschema);