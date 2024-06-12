const mongoose = require("mongoose");
const products = require("./products.model");

const subattributesSchema =new mongoose.Schema(
    {
        pid:{
            tyep:mongoose.Types.ObjectId,
            ref:'products',
            required:true
        },
        qty:{
            tyep:Number,
            default:1,
        }
    }
)
const cartsSchema =new mongoose.Schema(
    {
        users_id:{
            tyep:mongoose.Types.ObjectId,
            ref:'Users',
            required:true
        },
        is_active:{
            tyep:Boolean,
            default:false
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
)
const carts = mongoose.model('carts', cartsSchema)

module.exports = carts;

