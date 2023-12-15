const mongoose = require('mongoose')

const schema = mongoose.Schema;

const userschema = new schema({
    username: { type: String },
    mobile: { type: Number },
    city: { type: String },
    password: { type: String }

})

const usermodel = mongoose.model('user', userschema)

module.exports = usermodel;