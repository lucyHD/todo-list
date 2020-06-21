const mongoose = require('mongoose');


const Todo = new mongoose.Schema({

    item:{type:'String', required:'true'},
    dueBy:{type: Date, default: Date.now, required: 'true'},
    category: {type:'String', required: 'true'},
    col: {type: 'String', required: true},
    pinned:{type: Boolean, default: false},
//   pinned to the top! 
}, {
    toObject: {virtuals: true},

});


module.exports = mongoose.model('todo', Todo);

//even though we type todo, it will come up as todoS (pluralised in the actual Mongo Atlas)