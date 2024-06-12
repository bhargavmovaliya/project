const mongoose = require("mongoose");
const products = require("./products.model");

const subattributesSchema =new mongoose.Schema(
    {
        name:{
            tyep:String,
            required: true,
            unique: true,
        },
        value:{
            tyep:String,
            required:true,
        },
        stock:{
            tyep:Number,
            required:true
        },
        price:{
            tyep:Number,
            required:true
        },
    }
)
const varientsSchema =new mongoose.Schema(
    {
        products_id:{
            tyep:mongoose.Types.ObjectId,
            ref:'products',
            required:true
        },
        is_active:{
            tyep:Boolean,
            default:false
        },
        subattributes:[subattributesSchema]
    },
    {
        timestamps:true,
        versionKey:false
    }
)
const varients = mongoose.model('varients', varientsSchema)

module.exports = varients;

