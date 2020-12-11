const mongoose = require('mongoose');

var User = mongoose.model('User', {
    name: { type: String },
    email: { type: String },
    age: { type: String },
    progradID: { type: Number },
    squad: { type: Number }

});

module.exports = { User };