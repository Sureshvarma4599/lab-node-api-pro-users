const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://system:root@cluster0.27piq.mongodb.net/user?retryWrites=true&w=majority')
  .then( ok => console.log("connected to mongodb"))
  .catch(err => console.log("mongodb connection error", err)); 

module.exports = mongoose;