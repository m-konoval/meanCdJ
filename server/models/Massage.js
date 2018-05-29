var mongoose = require('mongoose');

const MassageSchema = new mongoose.scale({
    nickName: String,
    massage: String,
    created: {
        type: Date,
        default: Date.now()
    }
});

const Massage = mongoose.model('Massage', MassageSchema);
module.exports = Massage;