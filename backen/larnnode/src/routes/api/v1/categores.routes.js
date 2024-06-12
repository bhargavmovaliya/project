const express = require("express");

const { CategoriCotrolar } = require("../../../cotrolar");


const routes = express.Router();

routes.get('/categorieslist',
CategoriCotrolar.categorieslist
)
routes.get('/get-category/:category_id',
CategoriCotrolar.getcategory
)
routes.post('/add-category', 
CategoriCotrolar.addcategory
)
routes.put('/put-categories/:category_id',
CategoriCotrolar.putcategories
)

routes.delete('/delete-category/:category_id',
CategoriCotrolar.deletecategory

)
module.exports = routes;

