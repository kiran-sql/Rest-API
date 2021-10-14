const express = require('express');
const router = express.Router();

//query string (after ? )
//localhost:4000/person?name=kiran
router.get('/person',(request,response) => {
 if(request.query.name){
  response.send(`you have requested a person ${request.query.name}`);
 }
 response.send('you have requested a person');
});

//params property on the request object
//localhost:4000/person/kiran
router.get('/person/:name',(request,response) => {
 response.send(`you have requested a person ${request.params.name}`);
});
module.exports = router;