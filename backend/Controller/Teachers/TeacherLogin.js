const tData = require("../../Model/Teachers")
const bycrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")



const TeacherLogin = async (req, res) => {

    try {

        const { email, password } = req.body




        const dataExists = await tData.findOne({ email })




        if (!dataExists) {
            return res.status(400).json({
                message: "email not found"
            })
        }

        const hash = await bycrypt.compare(password, dataExists.password)


        if (!hash) {
            return res.status(400).json({
                message: "password wrong"
            })
        }


        const token = jwt.sign(
            { id: dataExists._id },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        )


        res.status(200).json({
            message: "account login successfully",
            token
        })


        





    }
    catch (err) {

        res.status(500).json({
            message: err.message
        })

    }


}

module.exports = { TeacherLogin }