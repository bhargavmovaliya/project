const express = require("express");
const { ProdactCotrolar } = require("../../../cotrolar");

const routes = express.Router();

routes.get('/prodactlist', 
ProdactCotrolar.producteslist
)
routes.get('/get-prodact/:prodact_id', 
 ProdactCotrolar.getprodact
)

routes.post('/add-prodact',
ProdactCotrolar.addprodact
)
routes.put('/put-prodact/:prodact_id', 
ProdactCotrolar.putprodact

)

routes.delete('/delete-prodact/:prodact_id',
ProdactCotrolar.deleteproductes

)
module.exports = routes;