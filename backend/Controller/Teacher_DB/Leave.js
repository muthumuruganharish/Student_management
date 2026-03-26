const data=require("../../Model/Students_DB")

const responseLeave=async(req,res)=>{
    try{
        console.log("API HIT ✅");
        console.log("req.user:",req.users)
        
        const teacherId=req.user.id
        

        const leaves=await data.find({
            selectedTeacher:teacherId
        })
        res.status(200).json({
            leaves
        })
    }
    catch(err){

        res.status(500).json({
            message:err.message
        })

    }
}
module.exports={responseLeave}