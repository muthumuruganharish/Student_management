const data=require("../../Model/Students_DB")

const leave=async(req,res)=>{

    try{
        const{from, selectedTeacher,subject,letter}=req.body
        const user= await data.create({
            from,
            selectedTeacher,
            subject,
            letter
        })
        res.status(200).json({
            message:"leave data stored"
        })

    }
    catch(err){

        console.log("server error")

    }

}
module.exports={leave}