const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
	name: {
        type: String,
        required: true,
        trim: true
    },
    surname: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
	username: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: Date,
        required: true,
        trim: true
    },
    gender: {
        type: String,
        required: true,
        trim: true
    },
    user: {
        type: String,
        required: true,
        trim: true
    },
    basket: {
        type: Array,
        trim: true
    },
    favorite: {
        type: Array,
        trim: true,

    },
    orders: {
        type: Array,
        trim: true
    },
    balance:{
        type: Number,
        required: true,
        trim: true
    },
    password:{
        type: String,
        required: true,
        trim: true
    }
})

module.exports = mongoose.model("User", UserSchema)