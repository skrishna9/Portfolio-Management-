const mongoose = require('mongoose');


const addSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    nameType: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    sold: {
        type: Number,
        required: true
    },
    curent: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
})


const stock = new mongoose.model("stock", addSchema)


module.exports = stock