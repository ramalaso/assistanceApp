const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Member = new Schema(
    {
        name: { type: String, required: true },
        assistance: { type: Boolean, required: true }
    }
);

module.exports = mongoose.model('members', Member);