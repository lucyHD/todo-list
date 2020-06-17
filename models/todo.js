const mongoose = require('mongoose');


const Todo = new mongoose.Schema({

    item:{type:'String', required:'true'},
    dueby:{type: Date, default: Date.now, required: 'true'},
    category: {type:'String', required: 'true'},
    completed:{type:Boolean, default: false},
    del:{type:'String'}, 
    
}, {
    toObject: {virtuals: true},

});


module.exports = mongoose.model('todo', Todo);

//even though we type todo, it will come up as todoS (pluralised in the actual Mongo Atlas)