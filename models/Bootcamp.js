const mongoose = require("mongoose");
const BootcampSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a name"],
        unique: true,
        trim: true,
        maxlength: [50, "Can not be more than 50 charactores"]
    },
    slug: String,
    description: {
        type: String,
        required: [true, "Please add a description"],
        maxlength: [600, "Descrition has exceeded limit of 600 charactors."]
    },
    website: {
        type: String,
        match: [
            /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
            "Please use a valid HTTPS or HTTP url"
        ]
    },
    email: {
        type: String,
        match: [
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Invalid email format "
        ]
    },
    address: {
        type: String,
        required: [true, "Please add your address."]
    },
    location: {
        // geoloa
        type: {
            type: String,
            enum: ["Point"],
            required: false
        },
        coordinates: {
            type: [Number],
            required: false,
            index: "2dsphere"
        },
        formattedAddress: String,
        zipcode: String,
        city: String,
        street: String,
        state: String,
        country: String
    },
    careers: {
        type: [String],
        requied: true,
        enum: [
            "Web Developer",
            "Mobile Developer",
            "UI/UX",
            "Data Science",
            "Business",
            "Network Administrator",
            "Other"
        ]
    },
    averageRating: {
        type: Number,
        max: [10, "Rate should be equal or less than 10"],
        min: [1, "Should not be less than 1"]
    },
    avarageCost: Number,
    photo: {
        type: String,
        default: "no-photo.jpg"
    },
    housing: {
        type: Boolean,
        default: false
    },
    jobAssistance: {
        type: Boolean,
        default: false
    },
    jobGuarantee: {
        type: Boolean,
        default: false
    },
    acceptGi: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('Bootcamp', BootcampSchema);