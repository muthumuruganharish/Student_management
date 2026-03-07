const tData = require("../../Model/Teachers")

const tReset = async (req, res) => {

    const { email, newPassword } = req.body

    const user = await tData.findOne({ email })

    if (!user) {
        res.status(400).json({
            message: "no email"
        })

    }

    const hash = await bycrypt.hash(newPassword, 10)

    user.password = hash
    await user.save()

    res.status(200).json({
        message: "password changed"
    })


}

module.exports = { tReset }