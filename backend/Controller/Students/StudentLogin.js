const sData = require("../../Model/Students")
const bycrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const StudentsLogin = async (req, res) => {

    try {


        const { reg, email, password } = req.body
        // console.log(req.body)

        const dataExists = await sData.findOne({ email })
        if (!dataExists) {
            return res.status(400).json({
                message: "email not found"
            })


        }

        if (dataExists.reg != reg) {
            return res.status(400).json({
                message: "wrong register number"
            })
        }

        const hash = await bycrypt.compare(password, dataExists.password)

        if (!hash) {
            return res.status(400).json({
                message: "wrong password"
            })
        }

        const token = jwt.sign(
            { id: dataExists._id, role: "student" },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.status(200).json({

            message: "login successfully",
            token: token

        })


    }

    catch (err) {

        res.status(500).json({
            message: err.message
        })

    }




}
module.exports = { StudentsLogin }