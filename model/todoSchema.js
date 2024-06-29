const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    title : {
        type: 'string',
        required: true
    },
    description : {
        type: 'string',
        required: true
    },
    createdAt : {
        type: 'date',
        default: Date.now(),
        required: true
    },
    updatedAt : {
        type: 'date',
        default: Date.now(),
        required: true
    },
});

module.exports = mongoose.model('Todo', Schema);