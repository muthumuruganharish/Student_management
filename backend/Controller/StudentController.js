const Sdata=require("../Model/Students")

const Students=async(req,res)=>{

    const{name,reg,email,password}=req.body
    console.log(req.body)

    try{
         
        const table= await Sdata.create({
            name,
            reg,
            email,
            password
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