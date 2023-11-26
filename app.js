require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require('./routes/approutes')
const port = process.env.port || 4000;

const mongopass = process.env.mongopass;

const mongoUrl = `mongodb+srv://admin:${mongopass}@zomato-cluster.pxfl14v.mongodb.net/Filpcart-clone`;


app.use(cors());

app.use(express.json()); // json format
app.use(express.urlencoded({ extended: false }));
app.use("/", routes);

mongoose.connect(mongoUrl).then(() => {

    console.log("database is connected")
    app.listen(port, () => {
        console.log("Server is connected")
    })

}).catch((error) => {
    console.log(error)
})





