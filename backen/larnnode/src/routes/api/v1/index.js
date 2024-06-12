const express = require("express");

const routes = express.Router();

const categoriesRoute = require("./categores.routes");
const subcategoriesRoute = require("./subcategores.routes");
const prodactRoute = require("./prodact.routes");

routes.use("/categories", categoriesRoute)
routes.use("/subcategories", subcategoriesRoute)
routes.use("/prodactes", prodactRoute)

module.exports = routes;