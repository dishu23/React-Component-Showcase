const express = require('express');
const router = express.Router();
const Model = require('../models/componentModel')

router.post('/add', (req, res) => {
    
    console.log(req.body);
    //storing data in datbase
    new Model(req.body).save()
    .then((result) => {
        res.jsonp(result);
        
    }).catch((err) => {
        res.status(500).jsonp(err);     
    });
});

router.get('/getall', (req, res) => {
    Model.find({})  
    .then((result) => {
        res.jsonp(result);
        
    }).catch((err) => {
        res.status(500).jsonp(err);
        
    });
})
//colon(:)denotes parameter
router.get('/getbyusername/:username', (req,res) => {
    Model.find({ username : req.params.username})
    .then((result) => {
        res.jsonp(result);
        
    }).catch((err) => {
        res.status(500).jsonp(err);
    });
})

router.get('/getbyid/:userid',(req,res) => {
    Model.findById(req.params.userid)
    .then((result) => {
        res.jsonp(result);
        
    }).catch((err) => {
        console.log(err);
        res.status(500).jsonp(err);
    });
})

router.delete('/delete/:userid', (req, res) => {
    Model.findByIdAndDelete(req.params.userid)
    .then((result) => {
        res.json(result);
        
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})
//for export data
module.exports = router;