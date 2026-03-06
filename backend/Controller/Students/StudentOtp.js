const sData = require("../../Model/Students")

const verifyOtp = async (req, res) => {

    try {

        const { email, otp } = req.body

        const user = await sData.findOne({ email })

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            })
        }

        if (user.otp != otp) {
            return res.status(400).json({
                message: "Wrong OTP"
            })
        }

        if (user.otpExpiry < Date.now()) {
            return res.status(400).json({
                message: "OTP expired"
            })
        }

        res.status(200).json({
            message: "OTP verified"
        })

    }

    catch (err) {
        console.log(err)
        res.status(500).json({
            message: "Server error"
        })
    }

}

module.exports = { verifyOtp }