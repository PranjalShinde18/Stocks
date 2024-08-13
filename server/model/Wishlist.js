const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wishlistSchema = new Schema({

    stock: {
        type: String,
        required: true
    },

    symbol: {
        type: String
    },

    note: {
        type: String
    },

},
    { timestamps: true });



const Wishlist = mongoose.model('Wishlist', wishlistSchema);

module.exports = Wishlist; 