const mongoose= require("mongoose")

const categoriesSchema = new mongoose.Schema(
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
            trim:true

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

const Categories =mongoose.model('Categories',categoriesSchema)
module.exports = Categories;