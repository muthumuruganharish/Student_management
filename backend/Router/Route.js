const express=require("express")
const router=express.Router()

const {createUser}=require("../Controller/Teachers/TeacherController")
const{Students}=require("../Controller/Students/StudentController")
const{StudentsLogin}=require("../Controller/Students/StudentLogin")
const{TeacherLogin}=require("../Controller/Teachers/TeacherLogin")


router.post("/teachersignup",createUser)
router.post("/studentsignup",Students)
router.post("/studentlogin",StudentsLogin)
router.post("/teacherlogin",TeacherLogin)

module.exports=router