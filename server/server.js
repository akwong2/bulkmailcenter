const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path')

const app = express();
const port = 9000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
require('dotenv').config() 

// app.use(express.static(path.join(__dirname, 'build')))

if (app.get('env') == "production") {

  app.use(express.static(path.join(__dirname, '../build')))

  app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, '../build/index.html'))
  })
}

app.get("/api", (req, res) => {
  console.log(app.get('env'))
  res.send(path.join(__dirname, '../build', 'index.html'))
  // res.send("Welcome to the Server")
})

app.post("/api/submitContact", (req, res) => {
  console.log("IN SUBMIT CONTACT")
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

app.get("/api/directionApi", (req, res) => {
  console.log("hello")
  let api = "";
  if (process.env.GOOGLEKEY !== undefined) api = process.env.GOOGLEKEY;
  res.status(200).send({key: api})
})

app.listen(port, () => console.log(`Running on port: ${port}`));
