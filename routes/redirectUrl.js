const express = require('express');
const router = express.Router();
const Url = require('../models/Url');

//@route       GET /:shortCode
//desc         redirecting to original long url
router.get('/:shortCode', async(req,res)=>{
    try {
        let url = await Url.findOne({ shortCode: req.params.shortCode})

        if(url){
            return res.redirect(url.longUrl);

        } else {
            return res.status(404).json('No url found');
        }
        
    } catch (error) {
        console.log(err);
        res.status(500).json('Server error');
        
    }
})



module.exports = router;