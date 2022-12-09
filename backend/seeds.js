const mongoose = require("mongoose");
const Product = require("./models/product");

mongoose.connect('mongodb://localhost:27017/aviran', { useNewUrlParser: true })
    .then(() => console.log("Mongo connection is open!"))
    .catch(err => console.error("Mongo connection failed", err));

const seedProducts = [
    {
        name: 'Samsung Galaxy S21 Ultra',
        price: 3000,
        description: 'The Samsung Galaxy S21 Ultra is the headliner of the S21 series.',
        imageUrl: 'https://i.ibb.co/vhVQ7fp/galaxy-s21-ultra.png'
    },
    {
        name: 'Samsung Galaxy Buds Pro',
        price: 300,
        description: 'Hear the best of your world on Galaxy Buds Pro - pro-grade wireless earbuds enhanced by intelligent active noise canceling and adjustable Ambient sound.',
        imageUrl: 'https://i.ibb.co/JkrVNKj/galaxy-buds-pro.png'
    },
    {
        name: 'Logitech G513 Gaming Keyboard',
        price: 500,
        description: 'G513 is a high-performance gaming keyboard featuring your choice of advanced GX mechanical switches. The detachable, memory-foam palmrest and premium aluminum-alloy construction make G513 full-featured and best-in-class.',
        imageUrl: 'https://i.ibb.co/jz1qKZL/logitech-g513.png'
    },
    {
        name: 'Logitech G502 LIGHTSPEED Gaming Mouse',
        price: 350,
        description: 'The Logitech G502 LIGHTSPEED is a versatile, feature-rich wireless mouse, while the ASUS ROG Keris Wireless is a lightweight wireless gaming mouse. The Logitech has a thumb rest, adjustable weights, several more programmable buttons, and a scroll wheel that unlocks for free scrolling and has left/right tilt buttons.',
        imageUrl: 'https://i.ibb.co/6448gVY/logitech-g502.png'
    },
    {
        name: 'Asus VG259QM Monitor',
        price: 1500,
        description: 'The ASUS TUF Gaming VG259QM is a great gaming monitor. It has low input lag, and its motion handling is superb thanks to its fast response time, high refresh rate, and backlight strobing feature. It supports FreeSync natively and is compatible with NVIDIA\'s G-SYNC.',
        imageUrl: 'https://i.ibb.co/RSJz3Hh/asus-monitor.png'
    },
    {
        name: 'HyperX Cloud II Gaming Headset',
        price: 400,
        description: 'HyperX Cloud II is Hi-Fi capable, with 53mm drivers for superior audio performance and rich sound quality with crystal-clear low, mid and high tones and enhanced bass via the sound card. Pro-gaming optimized, HyperX Cloud II is USB-powered for PCs and Macs and 3.5mm stereo-compatible for PS4 and Xbox One1.',
        imageUrl: 'https://i.ibb.co/0CJgdQH/hyperx-cloud-ii.png'
    },
    {
        name: 'SteelSeries QCK Mousepad',
        price: 60,
        description: 'SteelSeries QcK series mouse pads are the best in gaming, used by professional gamers everywhere thanks to their washable durability, non-slip base, and micro-woven cloth optimized for low and high CPI mouse tracking, available in a variety of sizes and styles.',
        imageUrl: 'https://i.ibb.co/y52BS9F/steelseries-qck.png'
    },
    {
        name: 'Computer',
        price: 6000,
        description: 'A recommended computer',
        imageUrl: 'https://i.ibb.co/rHQrp0q/computer.jpg'
    }
];

const seedDB = async () => {
    await Product.deleteMany({});
    await Product.insertMany(seedProducts);
};

seedDB().then(() => {
    console.log(`Successfully seeded MongoDB with ${seedProducts.length} products`);
    mongoose.connection.close();
})
