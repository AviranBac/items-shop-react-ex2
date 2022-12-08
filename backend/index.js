const express = require('express');
const mongoose = require("mongoose");
const Product = require('./models/product');
const Order = require('./models/order');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const cors = require('cors');
const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
};
app.use(cors(corsOptions));

mongoose.connect('mongodb://localhost:27017/aviran', { useNewUrlParser: true })
    .then(() => console.log("Mongo connection is open!"))
    .catch(err => console.error("Mongo connection failed", err));

app.get("/products", async (req, res) => {
    const products = await Product.find({});
    console.log("Products retrieved from DB:", JSON.stringify(products));
    res.send(products);
});

app.post("/orders", async (req, res) => {
    const orderToAdd = new Order(req.body);
    const orderInDB = await orderToAdd.save();

    console.log("Saved order:", JSON.stringify(orderInDB));
    res.send(orderInDB);
});

app.listen(8080, () => {
    console.log("Server listening on port 8080!");
});