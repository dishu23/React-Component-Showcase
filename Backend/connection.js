const mongoose = require('mongoose');
const dbname = "mernoctwss10"
const dbUrl = `mongodb+srv://deeksha:191998@cluster0.8oeg1x2.mongodb.net/${dbname}?retryWrites=true&w=majority`

//asynchronous function - return promise
mongoose.connect(dbUrl)
.then((result) => {
    //then will be executed on connection sucess
    console.log('connection sucessful');
})
.catch((err) => {
    //catch will be executed on failure
    console.log(err);
});

module.exports = mongoose;