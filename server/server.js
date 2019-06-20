const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');

const app = express();
const port = 5000;
sgMail.setApiKey("")

app.use(bodyParser());

app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to the SendGrid- Alvin")
})

app.post("/submitContact", (req, res) => {
    console.log("submitContact!!!")
    console.log(req.body)
    res.send("Post homepage")
    const msg = {
        to: 'alvin6000@gmail.com',
        from: 'alvindkwong@gmail.com',
        subject: 'Testing!',
        text: 'This is so cool!',
    }
    sgMail.send(msg)
        .then(ms => {
            console.log(ms)
            console.log("SENT!")
        })
        .catch(err => console.log(err))
});

app.listen(port, () => console.log(`Running on port: ${port}`));