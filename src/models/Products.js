const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

//type é o tipo de variavel
//require é se ele é um not null
const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    url:{
        type: String,
        required: true
    },
    created_at:{
        type: Date,
        default: Date.now
    }
});

ProductSchema.plugin(mongoosePaginate);

mongoose.model('Product', ProductSchema);