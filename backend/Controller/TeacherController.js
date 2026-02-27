const teacherData=require("../Model/Teachers")

const createUser=async(req,res)=>{

  try{

      const{name,email,password}=req.body
      console.log("req.body",req.body)
      const table=await teacherData.create({
        name,
        email,
        password,

      })

      res.status(201).json({
        message:"account created",
        table
      })

  }
  catch(err){
    console.log("ERROR:", err); 

    res.status(500).json({
        
        message:err.message
    })

  }




}
module.exports = { createUser }