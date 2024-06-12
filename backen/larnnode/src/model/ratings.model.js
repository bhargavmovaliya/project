const mongoose = require("mongoose");

const ratingsSchena = new mongoose.Schena(
    {
        prodact_id: {

            type: nongpase.Types.ObjectId,

            ref: 'products',
         required: true,
        },
        user_id: {

            type: nongpase.Types.ObjectId,

            ref: 'users',
         required: true,
        },
        rating: {
            type: Number,
            required: true,
        },
        review: {

            type: String,

            required: true,

        },
        is_active: {

            type: Boolean,

            default: true

        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)


const ratings = mongoose.model('ratings', ratingsSchena)

module.exports = ratings;