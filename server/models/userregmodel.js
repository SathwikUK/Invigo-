const mongoose = require('mongoose');

const facuserSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    },
    profileImage: {
        data: Buffer, // Store image data as Buffer
        contentType: String // Content type of the image (e.g., 'image/jpeg')
    }
});

module.exports = mongoose.model('FacUser', facuserSchema);
