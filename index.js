const express = require("express");
require('./db');
const app = express();
const bodyParser = require('body-parser');
const Url = require('./models/Url');


//@middlewares
app.use(express.urlencoded({ extended:false }));
app.use(express.json());


//Define routes
app.use('/api/url', require ('./routes/shortenUrl'));
app.use('/', require('./routes/redirectUrl'));


app.listen(4000);