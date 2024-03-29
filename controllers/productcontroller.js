const productmodel = require('../models/productmodel');
const mongoose = require('mongoose');


module.exports.createproduct = async (req, res) => {
    const { id, product_type, name, short_des, rating, price, warranty, highlights,
        description, image, img, pimg } = req.body;

    let createproduct = new productmodel({
        id: id,
        product_type: product_type,
        name: name,
        short_des: short_des,
        rating: rating,
        price: price,
        warranty: warranty,
        highlights: highlights,
        description: description,
        image: image,
        img: img,
        pimg: pimg

    });

    let result = await createproduct.save();
    if (result) {
        res.send({
            status: true,
            massage: "product is Created",
            result
        });
    }
    else {
        res.send({
            status: false,
            massage: "product is Not Created"
        });
    }

    // res.send({
    //     status: true
    // });

}



module.exports.getproducts = async (req, res) => {


    let result = await productmodel.find()
    res.send({
        status: true, result
    })
}

module.exports.getproductbytype = async (req, res) => {
    let { type } = req.params;

    let result = await productmodel.find({
        product_type: type
    });
    res.send({
        status: true,
        result
    });

}

module.exports.getproductbyid = async (req, res) => {
    let { id } = req.params;

    let result = await productmodel.find({
        id: id
    });

    res.send({
        status: true,
        result
    });
}

module.exports.getfiltertype = async (req, res) => {

    let {type, minprice, maxprice, discount } = req.body;
    // let { type } = req.params;
    let payload = {};
    if (type) {
        payload['product_type'] = type

    }
   if (type, minprice, maxprice) {
        payload['product_type'] = type;
        payload["price.0"] = { $lt: maxprice };
        payload["price.0"] = { $gt: minprice };

    }
   if (type, discount) {
        payload['product_type'] = type;
        payload['price.2'] = { $gte: discount };

    }
   if (type, discount, minprice, maxprice) {
        payload['product_type'] = type;
        // payload['price.2'] = { $gte: discount };
        payload['price.0'] = { $lt: maxprice ,$gt: minprice};
        // payload['price.0'] = { $gt: minprice };

    }

    let result = await productmodel.find(payload);
    console.log( payload)
    // console.log( result)

    if (result) {
        res.send({
            status: "true",
            result
        })
    } else {
        res.send({
            status: "false",

        })
    }

}