const mongoose= require("mongoose")

const UsersSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            trim:true,
            required:true,
            unique:true,
            lowercase:true
        },
       address: {
            type:String,
            trim:true,
            required:true

        },
        phone: {
            type:Number,
            trim:true,
            required:true

        },
        email: {
            type:String,
            trim:true,
            required:true,
            unique:true,
            lowercase:true,

        },
        password: {
            type:String,
            trim:true,
            required:true

        },
        role: {
            type:String,
            trim:true,
            required:true

        },
        refresh__token: {
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

const Users =mongoose.model('Users',UsersSchema)
module.exports = Users;