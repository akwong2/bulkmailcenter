const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to the Server")
})

app.post("/submitContact", (req, res) => {
    const {name, email, phone, comment} = req.body
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAILUSER,
          pass: process.env.GMAILPASS
        }
    });
    let mailOptions = {
        from: 'alvinkwongtest@gmail.com',
        to: 'alvinkwongtest@gmail.com',
        subject: `Contact Us Form - ${name}`,
        text: `name: ${name}\nemail: ${email}\nphone number: ${phone}\ncomment:\n${comment}\n`
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) res.status(500).send('Internal Server Error')
        else {
            console.log('Email sent: ' + info.response);
            res.status(200).send("OK")
        }
    });
});

app.listen(port, () => console.log(`Running on port: ${port}`));