const express = require('express');
const path = require('path');
let personRoute = require('./routes/person');
const app = express();
const bodyParser = require('body-parser');
const customerRoute = require('./routes/customer');

app.use(bodyParser.json());
app.use((req,res,next) => {
 console.log(`${new Date().toString()} => ${req.originalUrl}`,req.body);
 next();
});

app.use(personRoute);
app.use(customerRoute);
app.use(express.static('public'));

app.use((req,res,next) => {
 res.status(404).send("404 Not Found");
});

app.use((err,req,res,next) => {
 console.error(err.stack);
 res.sendFile(path.join(__dirname,'../public/500.html'));
 //res.status(500).send("404 Not Found");
});

const port = process.env.PORT || 4000 ;
app.listen(port,()=>{
 console.log("hello");
});