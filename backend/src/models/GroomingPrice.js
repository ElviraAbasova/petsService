const mongoose = require("mongoose")

const GroomingPrice = mongoose.Schema({
	package: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    about: {
        type: Array,
        required: true,
        trim: true
    }

})

module.exports = mongoose.model("GroomingPrice", GroomingPrice)