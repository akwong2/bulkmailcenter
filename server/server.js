const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(bodyParser());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to the SendGrid- Alvin")
})

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAILUSER,
      pass: process.env.GMAILPASS
    }
  });

let mailOptions = {
    from: 'alvinkwongtest@gmail.com',
    to: 'alvin6000@gmail.com',
    subject: 'Test',
    text: 'Hello there, I am testing'
};



app.post("/submitContact", (req, res) => {
    console.log(process.env.GMAILUSER, process.env.GMAILPASS)
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
});

// app.post("/submitContact", (req, res) => {
//     console.log("submitContact!!!")
//     console.log(req.body)
//     res.send("Post homepage")
//     const msg = {
//         to: 'file@bulkmailcenter.com',
//         from: 'alvin6000@gmail.com',
//         subject: 'Testing!',
//         text: 'This is so cool!',
//     }
//     sgMail.send(msg)
//         .then(ms => {
//             console.log(ms)
//             console.log("SENT!")
//         })
//         .catch(err => console.log(err))
// });

app.listen(port, () => console.log(`Running on port: ${port}`));