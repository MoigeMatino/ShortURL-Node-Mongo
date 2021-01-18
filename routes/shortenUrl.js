const express = require('express');
const router = express.Router();
// const validUrl = require('valid-url');
const shortid = require('shortid');
const dotenv = require('dotenv');
const Url = require('../models/Url');

dotenv.config();

//@route    POST api/url/shortenUrl
//@desc     Create short url
router.post('/shortenUrl', async(req,res) => {
    const baseUrl = process.env.BASE_URL;
    const shortCode = shortid.generate();
    const shortUrl = baseUrl + '/' + shortCode;
    const { longUrl } = req.body;
    // console.log (req.body.longUrl)
    let url = await Url.findOne({ longUrl });
    if (url){
        res.json(url)
    } else {
        const urlData = new Url({        
            shortUrl,
            shortCode,
            longUrl    
            
        });

        urlData.save()
        .then(data => {
            res.json(data);
        })
        .catch (err => {
            res.json({message:err})
        });


    }


})

module.exports = router;