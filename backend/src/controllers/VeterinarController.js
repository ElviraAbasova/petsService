const Veterinar = require("../models/VeterinarModel") 

const getAllData = async(req,res)=>{
    try {
        const veterinars = await Veterinar.find()
        res.status(200).json(veterinars)
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
       const veterinar= await Veterinar.find({_id:id})
       res.status(200).json(veterinar)
       
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
       const veterinar = await Veterinar.findOneAndUpdate({_id:id},req.body)
       res.status(200).json(veterinar)
       
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
       const veterinars = await Veterinar.findOneAndReplace({_id:id},req.body)
       res.status(200).json(veterinars)
       
   } catch (error) {
       res.status(404).json({
           success: false,
           message: "Id is not found"
       })
   }
}


const postData = async(req,res)=>{
  
    try {
        const newVeterinar = new Veterinar(req.body)
        newVeterinar.save()
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
        await Veterinar.findOneAndDelete({_id:id})
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