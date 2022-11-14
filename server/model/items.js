const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Creating a schema for documents which will be for items
const itemsSchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

const Item = mongoose.model('Item', itemsSchema);

module.exports=Item;