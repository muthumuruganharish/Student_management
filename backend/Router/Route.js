const express = require("express")
const router = express.Router()

const authMiddleware = require("../Middleware/cache")

const {createUser}=require("../Controller/Teachers/TeacherController")
const {Students}=require("../Controller/Students/StudentController")
const {StudentsLogin}=require("../Controller/Students/StudentLogin")
const {TeacherLogin}=require("../Controller/Teachers/TeacherLogin")

const {sendOtp}=require("../Controller/Students/StudentVerfyEmail")
const {verifyOtp}=require("../Controller/Students/StudentOtp")
const {reset}=require("../Controller/Students/StudentReset")

const {verifyEmail}=require("../Controller/Teachers/TeacherVerifyEmail")
const {Otp}=require("../Controller/Teachers/TeacherOtp")
const {tReset}=require("../Controller/Teachers/TeacherReset")

const {fetchName}=require("../Controller/Teachers/TeacherData")

const {leave}=require("../Controller/Students_DB/Leave")
const {responseLeave}=require("../Controller/Teacher_DB/Leave")

const{Assignment}=require("../Controller/Teacher_DB/Assignment")
const{StudentAssignment}=require("../Controller/Students_DB/StudentAssignment")
const Middleware=require("../Middleware/Middleware")





router.post("/teachersignup", authMiddleware,createUser)
router.post("/studentsignup", authMiddleware,Students)

router.post("/studentlogin",authMiddleware, StudentsLogin)
router.post("/teacherlogin",authMiddleware, TeacherLogin)

router.post("/semail", sendOtp)
router.post("/sotp", verifyOtp)
router.put("/reset", reset)

router.post("/temail", verifyEmail)
router.post("/totp", Otp)
router.put("/treset", tReset)

router.get("/leave",  fetchName)
router.post("/leave",Middleware,  leave)

router.get("/teacher-leave", Middleware, responseLeave)
router.post("/teacher-assignment/create-assignment",Assignment)
router.get("/assignment",StudentAssignment)



// router.get("/leave", authMiddleware, fetchName)
// router.post("/leave", authMiddleware, leave)

// router.get("/teacher-leave", authMiddleware, responseLeave)





module.exports = router