const data=require("../../Model/Students_DB")

const responseLeave=async(req,res)=>{
    try{

        
        const user=await data.find()
        res.status(200).json({
            
            user

        })

    }
    catch(err){

        res.status(500).json({
            message:err.message
        })

    }
}
module.exports={responseLeave}