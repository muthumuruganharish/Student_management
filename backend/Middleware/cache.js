const authMiddleware=(req,res,next)=>{
    const authHeader=req.headers.authorization
    if(!authHeader){
        return res.status(400).json({
            message:"no token"
        })
    }

    const token=authHeader.split(" ")[1]

    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        req.user=decoded
        next()
    }
    catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}
module.exports=authMiddleware