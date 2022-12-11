//Import exprees module
const express = require('express');
const useRouter = require('./routers/userRouter')
const compRouter = require('./routers/componentRouter')
const utilRouter = require('./routers/utils')
const cors = require('cors');

//initailizing express
const app = express();

app.use(cors({
    origin: ['http://localhost:3000']
}) );
// to parse json data to javascript
app.use(express.json());

//using middleware
app.use('/user', useRouter)
app.use('/comp', compRouter)
app.use('/util', utilRouter)

app.use(express.static('./static/uploads'));

//define port
const port = 5000;

//route
app.get('/', (req, res)=> {

    //send function is used for string response
    res.send('Request accepted')
})

app.get('/home', (req, res)=> {

    res.send('Home page')
})

app.get('/about', (req, res)=> {

    res.send('About page')
})

//starting the server
app.listen(port, () => {
    console.log("express server started");
});
