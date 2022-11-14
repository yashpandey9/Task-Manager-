const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemsSchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

//Creating a schema for documents which will be for lists
const listsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    items: [itemsSchema]
});

const List = mongoose.model('List', listsSchema);

module.exports=List;