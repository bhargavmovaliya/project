const Products = require("../model/products.model");

const producteslist = async (req, res) => {
    try {
        const products = await Products.find();
        if (!products || products.length === 0) {
            res.status(404).json({
                success: false,
    
            massage: "data is not found :"
            })
        }
        res.status(200).json({
            success: true,
            data: products
        })
        console.log(products);
    } catch (error) {
        res.status(500).json({
            success: false,
            massage: "internnet sarver error :" + error.massage
        })
    }
}
const getprodact = async (req, res) => {

    try {

        console.log(req.params.prodact_id);

        const products = await Products.findById(req.params.prodact_id);
        if (!products || products.length === 0) {
            res.status(404).json({
                success: false,
                massage: "data is not found :"
            })
        }
        res.status(200).json({
            success: true,
            data: products
        })
        console.log(products);
    } catch (error) {
        res.status(500).json({
            success: false,
            massage: "internnet sarver error :" + error.massage
        })

    }
}

const addprodact =  async (req, res) => {
    //console.log(req.body);
    try {

        

        const products = await Products.create(req.body);
        console.log(products);
        if (!products) {

            res.status(400).json({
                success: false,
                massage: "data is not found:"
            })

        }
        res.status(201).json({
            success: true,
            massage: "created sucses fully",
            data: products
        })


    } catch (error) {
        res.status(500).json({
            success: false,
            massage: "internnet sarver error :" + error.message
        })

    }
}
const putprodact = async (req, res) => {
  
    console.log("vvvv",req.params.prodact_id,req.body);
try {
const products = await Products.findByIdAndUpdate(req.params.prodact_id,req.body,{new:true},{runValidators:true});

if (!products) {
    res.status(400).json({
        success: false,
        massage: "data is not found:"
    })
    res.status(200).json({
        success: true,
        massage: "created sucses fully",
        data: products
    })

}
} catch (error) {
res.status(500).json({
    success: false,
    massage: "internnet sarver error :" + error.message
})
}
   


}
const deleteproductes = async(req,res) => {
    try {
  
          console.log(req.params.prodact_id);
  
          const products = await Products.findByIdAndDelete(req.params.prodact_id);
          if (!products || products.length === 0) {
              res.status(404).json({
                  success: false,
                  massage: "data is not found :"
              })
          }
          res.status(200).json({
              success: true,
              data: products
          })
          console.log(products);
      } catch (error) {
          res.status(500).json({
              success: false,
              massage: "internnet sarver error :" + error.massage
          })
  
      }
  }

module.exports = {
    producteslist,
    getprodact,
    addprodact,
    putprodact,
    deleteproductes
}