const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
const https = require('https');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(enforce.HTTPS({ trustProtoHeader: true }))
require('dotenv').config() 

if (process.env.NODE_ENV === "production") {
  console.log("production");
  app.use(express.static('client/build'));

  app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

app.get("/api", (req, res) => {
  console.log(app.get('env'))
  res.send(path.join(__dirname, 'client', 'build', 'index.html'))
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
          res.status(200).send("OK");
      }
  });
});

app.get('/api/directionKey', (req, res) => {
  console.log("IN DIRECTION API")
  console.log(process.env.GOOGLE_KEY)
  console.log(req.query)
  if (process.env.GOOGLE_KEY !== undefined) {
    res.status(200).send({apiKey: process.env.GOOGLE_KEY})
  }
  else {
    res.status(404).json({key: ""})
  }
})

app.post('/api/directionKey', (req, res) => {
  let id = req.body.id;
  if (process.env.GOOGLE_KEY && id === 12345) {
    res.status(200).send({apiKey: process.env.GOOGLE_KEY})
  }
  else {
    res.status(200).json({key: ""})
  }
})

// const options = {
//   key: fs.readFileSync('server.key'),
//   cert: fs.readFileSync('server.crt')
// };

// https.createServer(options, app).
app.listen(port, () => console.log(`Running on port: ${port}`));
