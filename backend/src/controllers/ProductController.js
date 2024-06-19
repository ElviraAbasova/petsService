const Product = require("../models/ProductModel") 

const getAllData = async(req,res)=>{
    try {
        const products = await Product.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server is not work"
        })
    }
}
const getDataById = async(req,res)=>{
    const {id} = req.params
   try {
       const product = await Product.find({_id:id})
       res.status(200).json(product)
       
   } catch (error) {
       res.status(404).json({
           success: false,
           message: "Id is not found"
       })
   }
}
const patchDataById = async(req,res)=>{
    const {id} = req.params
   try {
       const products = await Product.findOneAndUpdate({_id:id},req.body)
       res.status(200).json(products)
       
   } catch (error) {
       res.status(404).json({
           success: false,
           message: "Id is not found"
       })
   }
}
const putDataById = async(req,res)=>{
    const {id} = req.params
   try {
       const products = await Product.findOneAndReplace({_id:id},req.body)
       res.status(200).json(products)
       
   } catch (error) {
       res.status(404).json({
           success: false,
           message: "Id is not found"
       })
   }
}


const postData = async(req,res)=>{
  
    try {
        const newProduct = new Product(req.body)
        newProduct.save()
        res.status(201).json({
            success:true,
            message: "posted"
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server is not work"
        })
    }
}

const deleteDataById = async(req,res)=>{
     const {id} = req.params
    try {
        await Product.findOneAndDelete({_id:id})
        res.status(200).json({
            success:true,
            message: "deleted"
        })
        
    } catch (error) {
        res.status(404).json({
            success: false,
            message: "Id is not found"
        })
    }
}

module.exports={getAllData, getDataById,postData, deleteDataById,patchDataById,putDataById}