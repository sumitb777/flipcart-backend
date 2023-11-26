const mongoose = require("mongoose")

const schema = mongoose.Schema;

const productSchema = new schema({

    id: { type: Number },
    product_type: { type: String },
    name: { type: String },
    short_des: { type: String },
    rating: { type: Array },
    price: { type: Array },
    warranty: { type: String },
    highlights: { type: Array },
    description: { type: String },
    image: { type: String },
    img: { type: String },
    pimg: { type: String }

})

const productmodel = mongoose.model('product', productSchema, 'products');

module.exports = productmodel;