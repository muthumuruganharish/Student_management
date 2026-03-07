const express=require("express")
const router=express.Router()

const {createUser}=require("../Controller/Teachers/TeacherController")
const{Students}=require("../Controller/Students/StudentController")
const{StudentsLogin}=require("../Controller/Students/StudentLogin")
const{TeacherLogin}=require("../Controller/Teachers/TeacherLogin")
const{sendOtp}=require("../Controller/Students/StudentVerfyEmail")
const{verifyOtp}=require("../Controller/Students/StudentOtp")
const{reset}=require("../Controller/Students/StudentReset")
const{verifyEmail}=require("../Controller/Teachers/TeacherVerifyEmail")
const{Otp}=require("../Controller/Teachers/TeacherOtp")
const{tReset}=require("../Controller/Teachers/TeacherReset")


router.post("/teachersignup",createUser)
router.post("/studentsignup",Students)
router.post("/studentlogin",StudentsLogin)
router.post("/teacherlogin",TeacherLogin)

router.post("/semail",sendOtp)
router.post("/sotp",verifyOtp)
router.put("/reset",reset)
router.post("/temail",verifyEmail)
router.post("/totp",Otp)
router.put("treset",tReset)

module.exports=router