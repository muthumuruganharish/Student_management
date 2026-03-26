const data=require("../../Model/TeacherAssignment")

const StudentAssignment=async(req,res)=>{

        try{

            const users=await data.find()
            res.status(200).json({
                users
            })

        }
        catch(err){

            res.status(500).json({
                message:err.message
            })

        }


}

module.exports={StudentAssignment}