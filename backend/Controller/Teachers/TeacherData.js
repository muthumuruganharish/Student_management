const tData=require("../../Model/Teachers")

const fetchName=async(req,res)=>{

    try{

        const user=await tData.find().select("name")

        if(!user){
            return res.status(400).json({
                message:"no name found "
            })
          
        }

        res.status(200).json({
            message:"name sent",
            user
        })

    }

    catch(err){

        res.status(500).json({
            message:"server error in TeacherData.js"
        })

    }

}
module.exports={fetchName}