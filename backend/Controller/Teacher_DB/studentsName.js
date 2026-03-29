const Student = require("../../Model/Students")

const   studentsName = async (req, res) => {
  try {
    console.log("USER 👉", req.user)

    // ✅ Just fetch students
    const students = await Student.find()
    console.log("STUDENTS FROM DB 👉", students)

    res.status(200).json(students)

  } catch (err) {
    console.error(err)
    res.status(500).json({
      message: err.message
    })
  }
}

module.exports = { studentsName }