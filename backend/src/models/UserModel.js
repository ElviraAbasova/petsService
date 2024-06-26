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
        trim: true,
        default: "https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg"
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
        trim: true,
        default: "user"
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
        trim: true,
        default: 0
    },
    password:{
        type: String,
        required: true,
        trim: true
    }
})

module.exports = mongoose.model("User", UserSchema)