const mongoose = require('mongoose');

const SchemaProducts = mongoose.Schema({
    nombre: {
        type: String,
        unique: true,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    sabor: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    estado: {
        type:Boolean,
        default: true
    }
},
{
    //Con timestamps me pone la fecha de creacion del objeto
    timestamps:true,
    //Con versionKey le quito el valor que trae por defecto la version
    versionKey:false
}
)

module.exports = mongoose.model('product', SchemaProducts);