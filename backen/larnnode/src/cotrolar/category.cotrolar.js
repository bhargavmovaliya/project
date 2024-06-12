const Categories = require("../model/categores.model");

const categorieslist = async (req, res) => {
    try {
        const categories = await Categories.find();
        if (!categories || categories.length === 0) {
            res.status(404).json({
                success: false,
    
            massage: "data is not found :"
            })
        }
        res.status(200).json({
            success: true,
            data: categories
        })
        console.log(categories);
    } catch (error) {
        res.status(500).json({
            success: false,
            massage: "internnet sarver error :" + error.massage
        })
    }
}

const getcategory = async (req, res) => {

    try {

        console.log(req.params.category_id);

        const categories = await Categories.findById(req.params.category_id);
        if (!categories || categories.length === 0) {
            res.status(404).json({
                success: false,
                massage: "data is not found :"
            })
        }
        res.status(200).json({
            success: true,
            data: categories
        })
        console.log(categories);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "internnet sarver error :" + error.message
        })

    }
}

const addcategory = async (req, res) => {
    //console.log(req.body);
    try {

        

        const categories = await Categories.create(req.body);
        console.log(categories);

        if (!categories) {
            res.status(400).json({
                success: false,
                massage: "data is not found:"
            })
            res.status(201).json({
                success: true,
                massage: "created sucses fully",
                data: categories
            })

        }

    } catch (error) {
        res.status(500).json({
            success: false,
            massage: "internnet sarver error :" + error.message
        })

    }
}
const putcategories = async (req, res) => {
  
        console.log("vvvv",req.params.putcategory_id,req.body);
try {
    const categories = await Categories.findByIdAndUpdate(req.params.category_id,req.body,{new:true},{runValidators:true});

    if (!categories) {
        res.status(400).json({
            success: false,
            massage: "data is not found:"
        })

    }
    res.status(200).json({
        success: true,
        massage: "created sucses fully",
        data: categories
    })
} catch (error) {
    res.status(500).json({
        success: false,
        massage: "internnet sarver error :" + error.message
    })
}
       

   
}
const deletecategory = async(req,res) => {
  try {

        console.log(req.params.category_id);

        const categories = await Categories.findByIdAndDelete(req.params.category_id);
        if (!categories || categories.length === 0) {
            res.status(404).json({
                success: false,
                massage: "data is not found :"
            })
        }
        res.status(200).json({
            success: true,
            data: categories
        })
        console.log(categories);
    } catch (error) {
        res.status(500).json({
            success: false,
            massage: "internnet sarver error :" + error.massage
        })

    }
}

module.exports = {
    categorieslist,
    getcategory,
    addcategory,
    putcategories,
    deletecategory
}