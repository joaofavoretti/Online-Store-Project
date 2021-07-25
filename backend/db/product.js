const mongoose = require('./index');

const ProductScema = new mongoose.Schema({
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
        require: true,
        min: 0
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