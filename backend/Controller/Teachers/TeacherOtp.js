const tData=require("../../Model/Teachers")
const Otp=async(req,res)=>{
    try{

        const{email,otp}=req.body
        console.log(req.body)

        const user= await tData.findOne({email})

        if(!user){
           return res.status(400).json({
                message:"user not found"
            })
        }

        if(user.otp!=otp){
            return res.status(400).json({
                message:"Wrong Otp"
            })

        }
         if (user.otpExpiry < Date.now()) {
            return res.status(400).json({
                message: "OTP expired"
            })
        }


        res.status(200).json({
            message:"OTP verified",

        })
        
        
    }
    catch(err){
        console.log(err.message)
    }

    

}
module.exports={Otp}