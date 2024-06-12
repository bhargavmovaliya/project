const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema(
    {
        subcategory_id: {

            type: mongoose.Types.ObjectId,
            ref: 'Subcategories',
            required: true
        },
        
        seller_id: {
            type: mongoose.Types.ObjectId,
            id:"1",
        },
        name: {
            type: String,
            required: true,
            unique: true,
            tris: true,
          Lowercase: true
        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        price: {

            type: Number,
            required: true
        },
        stock: {
            type: Number,
            required: true
        },
        is_active: {
            type: Boolean,

            default: true
        },
    }, 
    {
    timestamps: true,

    versionkay: false
}


)

const Products = mongoose.model('Products', productsSchema)

module.exports = Products;