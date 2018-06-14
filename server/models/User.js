var mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userName: String,
    userEmail: String,
    password: String,
    created: {
        type: Date,
        default: Date.now()
    },
    updated: {
        type: Date,
        default: Date.now()
    }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;