const User = require("../models/UserModel") 

const getAllData = async(req,res)=>{
    try {
        const users = await User.find()
        res.status(200).json(users)
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
       const user= await User.find({_id:id})
       res.status(200).json(user)
       
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
       const users = await User.findOneAndUpdate({_id:id},req.body)
       res.status(200).json(users)
       
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
       const users = await User.findOneAndReplace({_id:id},req.body)
       res.status(200).json(users)
       
   } catch (error) {
       res.status(404).json({
           success: false,
           message: "Id is not found"
       })
   }
}


const postData = async(req,res)=>{
  
    try {
        const newUser = new User(req.body)
        newUser.save()
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
        await User.findOneAndDelete({_id:id})
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