let mongoose = require('mongoose');

// const server = ``;
// const database = ``;
// const user = `kiranchhablani24@gmail.com`;
// const password = `reshyamk666`;

mongoose.connect(`mongodb+srv://rest-api:reshyamk666@cluster0.qilxs.mongodb.net/rest-api?retryWrites=true&w=majority`);

let CustomerSchema = new mongoose.Schema({
 name:String,
 email:{
  type:String,
  required:true,
  unique:true,
 }
});

module.export = mongoose.model('Customer', CustomerSchema);