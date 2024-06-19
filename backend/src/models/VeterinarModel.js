const mongoose = require("mongoose")

const VeterinarSchema = mongoose.Schema({
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
    facebook: {
        type: String,
        trim: true
    },
	instagram: {
        type: String,
        trim: true
    },
    twitter: {
        type: String,
        trim: true
    },
    randevus: {
        type: Array,
        required: true,
        trim: true
    }
})

module.exports = mongoose.model("Veterinar", VeterinarSchema)