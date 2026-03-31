const profile = require("../../Model/Teachers")

const showProfile = async (req, res) => {

    try {
        // req.user.id → comes from JWT token (secure user identification)
        // "name email" → select only required fields from DB
        // prevents exposing sensitive fields (like password) and keeps response clean
        const teacher = await profile.findById(req.user.id)

        if (!teacher){
            return
            res.status(400).json({
                message:"profile not found"
            })
        }
        res.status(200).json({
            message:"profile fetched successfully",
            teacher,
            // teacherId:teacher._id
        })


    }

    catch (err) {

        res.status(500).json({ message: err.message });

    }


}
module.exports = { showProfile }