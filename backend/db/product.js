const mongoose = require('./index');

const ProductScema = new mongoose.Schema({
    id: {
        type: Number,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    quantity:{
        type: Number,
        require: true
    },
    description: {
        type: String,
        require: false
    },
    youtubeEmbed: {
        type: String,
        require: false
    },
    src: {
        type: String,
        require: false
    },
    dateCreated: {
        type: Date,
        dafault: Date.now
    }
},
{
    versionKey: false
});

const Product = mongoose.model( 'Product', ProductScema );
module.exports = Product;