const Subcatagories = require("../model/subcategories.model");

const subcategorieslist = async (req, res) => {
    try {
        const subcategoris = await Subcatagories.find();
        if (!subcategoris) {
            res.status(404).json({
                success: false,
                massage: "data is not found :"+ error.message
            })
        }
        res.status(200).json({
            success: true,
            data: subcategoris
        })
        console.log(subcategoris);
    } catch (error) {
        res.status(500).json({
            success: false,
            massage: "internnet sarver error :" + error.massage
        })

    }
}

const  getsubcategory = async(req, res) => {
    try {

        console.log(req.params.subcategory_id);

        const  subcategores = await Subcatagories.findById(req.params.subcategory_id);
        if (!subcategores || subcategores.length === 0) {
            res.status(404).json({
                success: false,
                massage: "data is not found :"
            })
        }
        res.status(200).json({
            success: true,
            data: subcategores
        })
        console.log(subcategores);
    } catch (error) {
        res.status(500).json({
            success: false,
            massage: "internnet sarver error :" + error.massage
        })

    }
}

const addsubcategory = async(req, res) => {
  console.log(req.body);
  try {

        

    const subcategores = await Subcatagories.create(req.body);
    console.log(subcategores);

    if (!subcategores) {
        res.status(400).json({
            success: false,
            massage: "data is not found:"
        })
       

    }
    res.status(201).json({
        success: true,
        massage: "created sucses fully",
        data: subcategores
    })

} catch (error) {
    res.status(500).json({
        success: false,
        massage: "internnet sarver error :" + error.message
    })

}
}
const putsubcategories =  async (req, res) => {
  
    console.log("vvvv",req.params.subcategory_id,req.body);
try {
const subcategores = await Subcatagories.findByIdAndUpdate(req.params.subcategory_id,req.body,{new:true},{runValidators:true});

if (!subcategores) {
    res.status(400).json({
        success: false,
        massage: "data is not found:"
    })
    res.status(200).json({
        success: true,
        massage: "created sucses fully",
        data: subcategores
    })

}
} catch (error) {
res.status(500).json({
    success: false,
    massage: "internnet sarver error :" + error.message
})
}
   


}
const deletesubcategory =async(req,res) => {
    try {
  
          console.log(req.params.subcategorydelete_id);
  
          const subcategores = await Subcatagories.findByIdAndDelete(req.params.subcategorydelete_id);
          if (!subcategores || subcategores.length === 0) {
              res.status(404).json({
                  success: false,
                  massage: "data is not found :"+ error.massage
              })
          }
          res.status(200).json({
              success: true,
              data: subcategores
          })
          console.log(subcategores);
      } catch (error) {
          res.status(500).json({
              success: false,
              massage: "internnet sarver error :" + error.massage
          })
  
      }
  }
  const getsubcategoryandcategory  = async(req,res)=>{
    try {

        console.log(req.params.categorys_id);

        const  subcategoryandcategory = await Subcatagories.find({categorys_id:req.params.categorys_id});
console.log(subcategoryandcategory);
if (!subcategoryandcategory) {
    res.status(404).json({
        success: false,
        massage: "data is not found :"+ error.message
    })
        }
        res.status(200).json({
            success: true,
            data: subcategoryandcategory
        })
        console.log(subcategoryandcategory);
    } catch (error) {
        res.status(500).json({
            success: false,
            massage: "internnet sarver error :" + error.massage
        })

    }
  }

module.exports = {
    subcategorieslist,
    getsubcategory,
    addsubcategory,
    putsubcategories,
    deletesubcategory,
    getsubcategoryandcategory
}


