const mongoose = require("mongoose")
const Students = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    reg: {
        type: Number,
        required: true,

    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    otp: {
        type: String
    },
    otpExpiry: {
        type: Date
    }
}, { timestamps: true })

module.exports = mongoose.model("Students", Students)