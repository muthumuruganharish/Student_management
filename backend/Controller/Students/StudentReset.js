const sData=require("../../Model/Students")
const bycrypt=require("bcryptjs")

const reset=async(req,res)=>{

    try{
        const {email,newPassword}=req.body
        console.log(req.body)

        const user= await sData.findOne({email})
        const hash=await bycrypt.hash(newPassword,10)
       
        user.password=hash
        await user.save()
        res.status(200).json({
            message:"password updated"
        })




    }
    catch(err){
        res.status(500).json({
            message:"server error"
        })
    }



}
module.exports={reset}