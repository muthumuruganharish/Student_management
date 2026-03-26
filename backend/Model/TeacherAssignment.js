const moongose = require("mongoose")

const TeacherAssignment = new moongose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    subject: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: String,
        required: true,
        trim: true
    },
    totalMarks: {
        type: String,
        required: true,
        trim: true
    },
    file: {

        type: String,
        



    }

},{ timestamps: true })
module.exports=moongose.model("TeacherAssignment",TeacherAssignment)