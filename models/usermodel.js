const mongoose = require('mongoose')

const schema = mongoose.Schema;

const userschema = ({
    username: { type: String },
    mobile: { type: Number },
    city: { type: String },
    password: { type: String }

})

const usermodel = schema.model('user', userschema,'users')

module.exports = usermodel;