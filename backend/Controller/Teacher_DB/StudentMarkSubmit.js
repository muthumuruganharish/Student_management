const data = require("../../Model/StudentsMark")

const StudentMarkSubmit = async (req, res) => {

    try {
        console.log("api hit")
        const { selectedStudent, cgpa, attendance } = req.body
        console.log(req.body)
        const user = await data.findOneAndUpdate(
            { selectedStudent },
            {
                // "$set" updates only specific fields (without this, MongoDB may try to replace entire document)
                // Since our model has 3 fields (selectedStudent, cgpa, attendance)
                // but we are updating only 2 (cgpa, attendance),
                // it can fail or remove missing fields.

                $set: {
                    cgpa: Number(cgpa),
                    attendance: Number(attendance)
                }
            },
            // new: true     -> return updated document (not old one)
            // upsert: true  -> if student not found, create new record automatically
            { new: true, upsert: true }

        )

        res.status(200).json({
            message: "saved successfully",
            data: user
        })



    }
    catch (err) {

        res.status(500).json({
            message: err.message
        })

    }


}
module.exports = { StudentMarkSubmit }