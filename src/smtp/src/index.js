'use strict'
require('dotenv').config()
const nodemailer = require('nodemailer')

// Google workspace smtp
// Sign in with app passwords: https://support.google.com/accounts/answer/185833?hl=en
//
// 1.) Go to https://myaccount.google.com/
// 2.) Select security
// 3.) Under "Signing in to Google," select App Passwords
// 4.) At the bottom, choose Select app and choose the app you using and then Select device and choose the device you’re using and then Generate.
// 5.) Follow the instructions to enter the App Password. The App Password is the 16-character code in the yellow bar on your device.
// 6.) Tap Done.
const USER = process.env.GOOGLE_USER
const PASS = process.env.GOOGLE_PASS

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: USER, // generated ethereal user
      pass: PASS, // generated ethereal password
    },
  })

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <crash@crash.engineer>', // sender address
    to: 'admin@crash.engineer', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world?', // plain text body
    html: '<b>Hello world?</b>', // html body
  })

  console.log('Message sent: %s', info.messageId)
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error)
