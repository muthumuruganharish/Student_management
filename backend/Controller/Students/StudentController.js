const Sdata=require("../../Model/Students")
const bycrypt=require("bcryptjs")

const Students=async(req,res)=>{

    const{name,reg,email,password}=req.body
    console.log(req.body)

    const hash=await bycrypt.hash(password,10)

    try{
         
        const table= await Sdata.create({
            name,
            reg,
            email,
            password:hash
        })

        res.status(201).json({
            message:"created",
            table

        })


    }

    catch(err){

        res.status(500).json({
            message:err.message
        })

    }




}
module.exports={Students}