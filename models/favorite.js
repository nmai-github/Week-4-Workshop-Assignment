const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create a new Mongoose Schema
const favoriteSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, //store a reference to a user document
        ref: 'User'
    },
    campsites: [{
        type: mongoose.Schema.Types.ObjectId, //store a reference to a campsite document
        ref: 'Campsite'
    }]
}, {
    timestamps: true
});

//create a new model
const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite;