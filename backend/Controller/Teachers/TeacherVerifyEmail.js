const nodeMailer = require("nodemailer")
const tData = require("../../Model/Teachers")

const verifyEmail = async (req, res) => {

    try {
        const { email } = req.body
        console.log(req.body)

        const user = await tData.findOne({ email })

        if (!user) {
            return res.status(400).json({
                message: " email not found"
            })

        }
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        user.otp = otp
        user.otpExpiry = Date.now() + 5 * 60 * 1000//5 min
        await user.save()
        const transporter = nodeMailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD
            }
        })

        await transporter.sendMail({
            from: process.env.EMAIL,
            to: email,
            subject: "Password Reset OTP",
            text: `Your OTP is ${otp}`
        })
        res.status(200).json({
            message: "Otp sent successfully"

        })

    

    }
    catch (err) {
    res.status(500).json({
        message: "server error"
    })
}

    





}
module.exports = { verifyEmail }