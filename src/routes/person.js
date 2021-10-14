const express = require('express');
const router = express.Router();

router.get('/person',(request,response) => {
 response.send('you have requested a person');
});

module.exports = router;