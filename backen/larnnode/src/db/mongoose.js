const mongoose = require('mongoose');

const conectDB = async () => {
    try {
        mongoose.connect('mongodb+srv://bhargavmovaliya576:c6BhDYPnTivqs762@cluster0.8m3m0r4.mongodb.net/ecommerce')
            .then(() => console.log("mongodb conect sucsefullly "))
            .catch((error) => console.log("mongodb conectnot found  :" + error))

    } catch (error) {
        console.log("mongodb conect not found :" + error)
    }
}
module.exports = conectDB;