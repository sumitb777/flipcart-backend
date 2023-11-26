const express = require('express');
const routes = express.Router();

const productcontroller = require('../controllers/productcontroller')
const paymentController = require('../controllers/paymentcontroller')
const usercontroller = require('../controllers/usercontroller')

routes.get('/', (req, res) => {
    res.send({
        status: true,
        massage: "welcome to flipcart api"
    })
});
routes.post('/create-product', productcontroller.createproduct);
routes.get('/get-products', productcontroller.getproducts);
routes.get('/get-product-by-type/:type', productcontroller.getproductbytype);
routes.get('/get-product-by-id/:id', productcontroller.getproductbyid);
routes.post('/get-order-id', paymentController.createOrderId)
routes.post('/confirmPayment', paymentController.confirmPayment)
routes.post('/create-user', usercontroller.createuser)
routes.post('/login', usercontroller.login)




module.exports = routes;
