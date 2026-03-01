const express=require("express")
const router=express.Router()

const {createUser}=require("../Controller/TeacherController")
const{Students}=require("../Controller/StudentController")


router.post("/teachersignup",createUser)
router.post("/studentsignup",Students)

module.exports=router