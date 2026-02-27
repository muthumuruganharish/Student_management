const express=require("express")
const router=express.Router()

const {createUser}=require("../Controller/TeacherController")


router.post("/teachersignup",createUser)

module.exports=router