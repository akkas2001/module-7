const express = require("express");
const app = new express();
const router = require("./src/Routes/api")
const bodyParser = require('body-parser');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const hpp = require('hpp');
const cors = require('cors');
const mongoose = require('mongoose');


// //////security
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(hpp())
app.use(mongoose())

///json parser
app.use(bodyParser.json())

////rate limiting
const limiter =rateLimit({windowMs:15*60*1000,max:300});
app.use(limiter);

/////undifined route 
app.use("*", (req, res) => { 
    res.status(404).json({status:"fail", data: "Data not found"});
});

module.exports = app;
