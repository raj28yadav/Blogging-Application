const { createHmac, randomBytes} = require("crypto");
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    salt: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    profileImageURL: {
        type: String,
        default: "./images/default.jpg",
    },
    role: {
        type: String,
        enum: ["USER", "ADMIN"],
        default: "USER",
    }
},
{timestamps: true}
);

const User = mongoose.model('user', userSchema);
module.exports = User;