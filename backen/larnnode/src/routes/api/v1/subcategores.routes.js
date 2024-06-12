const express = require("express");

const { SubCategoriCotrolar } = require("../../../cotrolar");
const routes = express.Router();

routes.get('/subcategorieslist', 
SubCategoriCotrolar.subcategorieslist

)
routes.get('/getsubcategories/:subcategory_id', 
SubCategoriCotrolar.getsubcategory

)

routes.post('/add-subcategories',
SubCategoriCotrolar.addsubcategory

)
routes.put('/put-subcategories/:subcategory_id',
SubCategoriCotrolar.putsubcategories

)

routes.delete('/delete-subcategories/:subcategorydelete_id', 
SubCategoriCotrolar.deletesubcategory

),
routes.get('/getsubcategoriescategory/:categorys_id', 
    SubCategoriCotrolar.getsubcategoryandcategory
    
    )
module.exports = routes;