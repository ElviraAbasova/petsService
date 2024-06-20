const GroomingPrice = require("../models/GroomingPrice") 

const getAllData = async(req,res)=>{
    try {
        const grooming = await GroomingPrice.find()
        res.status(200).json(grooming)
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
       const grooming= await GroomingPrice.find({_id:id})
       res.status(200).json(grooming)
       
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
       const grooming = await GroomingPrice.findOneAndUpdate({_id:id},req.body)
       res.status(200).json(grooming)
       
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
       const grooming = await GroomingPrice.findOneAndReplace({_id:id},req.body)
       res.status(200).json(grooming)
       
   } catch (error) {
       res.status(404).json({
           success: false,
           message: "Id is not found"
       })
   }
}


const postData = async(req,res)=>{
  
    try {
        const newGrooming = new GroomingPrice(req.body)
        newGrooming.save()
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
        await GroomingPrice.findOneAndDelete({_id:id})
        res.status(200).json({
            success: true,
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