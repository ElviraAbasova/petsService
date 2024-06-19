const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema({
	title: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
	price: {
        type: Number,
        required: true,
        trim: true

    },
    stock: {
        type: Number,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    pet: {
        type: String,
        required: true,
        trim: true
    },
    tags: {
        type: Array,
        required: true,
        trim: true
    },
    discount: {
        type: Number,
        trim: true
    },
    seller: {
        type: Number,
        required: true,
        trim: true
    },
    rating:{
        type: Number,
        required: true,
        trim: true
    },
    comments: {
        type: Array,
        required: true,
        trim: true
    }
})

module.exports = mongoose.model("Product", ProductSchema)