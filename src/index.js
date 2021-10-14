const express = require('express');
let personRoute = require('./routes/person');
const app = express();

app.use(express.static('public'));
app.use(personRoute);
const port = process.env.PORT || 4000 ;

app.listen(port,()=>{
 console.log("hello");
})