const mongoose = require("mongoose")
const StudentsMark = new mongoose.Schema({
    selectedStudent:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Students",   // your Students collection name
        required: true
    },
     cgpa: {
        type: Number,
        required: true
    },
    attendance: {
        type: Number,
        required: true
    }

})
module.exports=mongoose.model("studentsMark",StudentsMark)