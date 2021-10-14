const express = require('express');
let personRoute = require('./routes/person');
const app = express();
app.use((req,res,next) => {
 console.log(`${new Date().toString()} => ${req.originalUrl}`);
 next();
});
app.use(personRoute);
app.use(express.static('public'));
const port = process.env.PORT || 4000 ;

app.listen(port,()=>{
 console.log("hello");
})