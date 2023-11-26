const mongoose = require('mongoose')

const schema = mongoose.Schema;

const userschema = ({
    username: { type: String },
    mobile: { type: Number },
    city: { type: String },
    password: { type: String }

})

const usermodel = mongoose.model('users', userschema,)

module.exports = usermodel;