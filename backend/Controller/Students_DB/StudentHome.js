const studentsMark=require("../../Model/StudentsMark")

const getMarks=async(req,res)=>{

try{

    const data=await studentsMark.findOne({selectedStudent:req.user.id}).populate("selectedStudent","name reg email")

    res.status(200).json(data)


}

catch(err){

    res.status(200).json({
        message:err.message
    })


}


}

module.exports={getMarks}