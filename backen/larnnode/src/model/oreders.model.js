const mongoose = require("mongoose");

const subitemsSchema =new mongoose.Schema(
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
const oredersSchema=new mongoose.Schema(
    { 
        users_id:{
            tyep:mongoose.Types.ObjectId,
            ref:'Users',
            required:true
        },
        seller_id:{
            tyep:mongoose.Types.ObjectId,
            ref:'Users',
            required:true
        },
        peyment_id:{
            tyep:mongoose.Types.ObjectId,
            ref:'peyments',
            required:true
        },
        amount:{
            tyep:Number,
            required:true
        },
        descount: {
            type: Number,
         default:true
        },
        status:{
            Type:String,
            default:'pending'
        },
        
        is_active:{
            tyep:Boolean,
            default:false
        },
        subitems:[subitemsSchema]
    },
    {
        timestamps:true,
        versionKey:false
    }
)
const oreders = mongoose.model('oreders', oredersSchema)

module.exports = oreders;

