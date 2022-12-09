const mongoose = require('mongoose');

const productInOrderSchema = new mongoose.Schema({
    ...mongoose.model("products").schema.obj,
    quantity: {
        type: Number,
        require: true,
        min: 1
    }
}, {
    _id: false
});

const orderSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    totalPrice: {
        type: Number,
        require: true
    },
    products: [{
        type: productInOrderSchema,
        require: true
    }]
});

const Order = mongoose.model('orders', orderSchema);
module.exports = Order;
