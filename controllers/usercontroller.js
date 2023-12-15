const usermodel = require('../models/usermodel')
const jwtoken = require('jsonwebtoken')
const key = "abcd123"

module.exports.createuser = async (req, res) => {
    let data = req.body;


    let newuser = new usermodel({
        username: data.username,
        mobile: data.mobile,
        city: data.city,
        password: data.password
    })
    let result = await newuser.save([])
    if (result) {
        res.send({
            status: true,
            massage: "user  created",
            result
        })
    } else {
        res.send({
            status: false,
            massage: "user not created"
        })
    }

}


module.exports.login = async (req, res) => {

    const data = req.body;

    const result = await usermodel.find({
        username: data.username,
        password: data.password
    }, {
        password: 0
    })

    if (result) {
        let data = {
            username: result.username,
            mobile: result.mobile,
            city: result.city,

        }
        let token = jwtoken.sign(data, key, { expiresIn: "24h" })
        res.send({
            status: true,
            massage: "your loged in",
            token
        })

    } else (
        res.send({
            status: false,
            massage: "login unsucessfull",
        })

    )




}

