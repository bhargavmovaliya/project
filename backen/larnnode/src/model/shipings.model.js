const mongoose= require("mongoose")

const shipingsSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            trim:true,
            required:true,
            unique:true,
            lowercase:true
        },
       description: {
            type:String,
            trim:true,
            required:true

        },
        image: {
            type:String,
            trim:true,
            required:true

        },
        is_active:{
            type:Boolean,
            default:true
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const shipings =mongoose.model('shipings',shipingsSchema)
module.exports = shipings;