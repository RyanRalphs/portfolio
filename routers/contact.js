const router = require('express').Router()
const nodeMailer = require('nodemailer')
require('dotenv').config()

const pass = process.env.EMAIL_PASS

router.post('/contact', ({ body }, res) => {


    if (body.name.length === 0 || body.email.length === 0 || body.message.length === 0) {
        return res.json({
            message: 'Please fill in all the fields'
        })
    }

    let transporter = nodeMailer.createTransport({
        service: 'Gmail',
        port: 465,
        auth: {
            user: 'rysbouncethrough@gmail.com',
            pass: pass
        }
    })

    let mailOptions = {
        from: body.email,
        to: 'dev@ryanralphs.co.uk',
        subject: `Portfolio Message!`,
        html: `
            <h3> Email </h3>
            <ul>
            <li>Name: ${body.name}</li>
            <li>Email: ${body.email}</li>
            <li>Message: ${body.message}</li>
            </ul> `
    }

    transporter.sendMail(mailOptions, (error) => {
        try {
            if (error) {
                return res.status(400).json({ message: 'Fill out all the fields.' })
            }
            res.status(200).json({ message: "Thank you for contacting me. I will be in touch." })
        } catch (error) {
            if (error) {
                return res.status(500).json({ message: 'Something went wrong. Try again later.' })
            }
        }
    })

})


module.exports = router