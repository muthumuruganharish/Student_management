const mongoose = require("mongoose")

const StudentsDB = new mongoose.Schema({

    from: {
        type: String,
        required: true,
        trim: true
    },
    /*
     selectedTeacher comes from the dropdown in the frontend.
   
     The dropdown sends the teacher's _id when a teacher is selected.
   
     Example frontend data:
     {
       subject: "Medical Leave",
       letter: "I have fever",
       selectedTeacher: "6642f1c9a21b9a7f4b..."
     }
   
     We store the teacher _id using ObjectId and reference the Teachers collection.


   """"  This allows us to later use `.populate("selectedTeacher")` """"


     to get full teacher details like name and email.
     */
    selectedTeacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Teachers",
        required: true
    },

    subject: {
        type: String,
        required: true,
        trim: true
    },

    letter: {
        type: String,
        required: true,
        trim: true
    }

}, { timestamps: true })

module.exports = mongoose.model("LeaveRequests", StudentsDB)