const Groomer = require("../models/GroomerModel") 

const getAllData = async(req,res)=>{
    try {
        const groomers = await Groomer.find()
        res.status(200).json(groomers)
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
       const groomer= await Groomer.find({_id:id})
       res.status(200).json(groomer)
       
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
       const groomer = await Groomer.findOneAndUpdate({_id:id},req.body)
       res.status(200).json(groomer)
       
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
       const groomer = await Groomer.findOneAndReplace({_id:id},req.body)
       res.status(200).json(groomer)
       
   } catch (error) {
       res.status(404).json({
           success: false,
           message: "Id is not found"
       })
   }
}


const postData = async(req,res)=>{
  
    try {
        const newGroomer = new Groomer(req.body)
        newGroomer.save()
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
        await Groomer.findOneAndDelete({_id:id})
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