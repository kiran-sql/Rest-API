const CustomerModel = require('../models/customer.model.js');
const express = require('express');
let router = express.Router();

router.post('/customer',(request,response) => {
 if(!request.body){
return response.status(400).send('Request body is missing');
 }
 let model = new CustomerModel(request.body);
 model.save()
 .then(doc => {
  if(!doc || doc.length ===0){
   return response.status(500).send(doc);
  }
  response.status(201).send(doc);
 })
 .catch(err => {
  response.status(500).json(doc);
 });
});

router.get('/customer',(req,res) => {
 if(!req.query.email){
  res.status(404).send('Missing url parameter email');
 }
 CustomerModel.findOne({
  email:req.query.email
 })
 .then(doc => {
  res.json(doc);
 })
 .cathc(err => {
res.status(500).json(err);
 });
});
module.exports = router;