const data= require("../../Model/TeacherAssignment")

const Assignment=async(req,res)=>{

    try{

        const{title,subject,description,date,totalMarks,file}=req.body

        const user=await data.create({
            title,
            subject,
            description,
            date,
            totalMarks,
            file

        })
       
        res.status(201).json({
            user
        })


    }
    catch (err){

        res.status(500).json({
            message:"server error:"

        })

    }


}
module.exports={Assignment}