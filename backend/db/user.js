const mongoose = require('./index');

const UserScema = new mongoose.Schema({
    id: {
        type: Number,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    address:{
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    dateCreated: {
        type: Date,
        dafault: Date.now
    }
});

const User = mongoose.model( 'User', UserScema );
module.exports = User;