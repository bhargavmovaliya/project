const  mongoose = require("mongoose");

const subcatagoriesSchema= new mongoose.Schema(
{

    categorys_id: {
        type:mongoose.Types.ObjectId,
        ref:'Categories',
        required: true
        },

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
    

        },
    is_active: {
        type:Boolean,
        default:true
    }
},
{
    timestamps: true, 
    versionKey: false
}
)


const Subcatagories =mongoose.model('Subcatagories',subcatagoriesSchema)

module.exports = Subcatagories;