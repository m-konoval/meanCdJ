var mongoose = require('mongoose');

const MassageSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    massage: String,
    created: {
        type: Date,
        default: Date.now()
    }
});

const Massage = mongoose.model('Massage', MassageSchema);
module.exports = Massage;