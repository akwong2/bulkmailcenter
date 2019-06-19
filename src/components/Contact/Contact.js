import React, { Component } from 'react';
const sgMail = require('@sendgrid/mail');

class Contact extends Component {

    submitForm = (event) => {
        console.log("submitted!")
        
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        const msg = {
            to: 'test@example.com',
            from: 'test@example.com',
            subject: 'Sending with Twilio SendGrid is Fun',
            text: 'and easy to do anywhere, even with Node.js',
            html: '<strong>and easy to do anywhere, even with Node.js</strong>',
        };
        sgMail.send(msg);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h2>Contact</h2>
                <form onSubmit={this.submitForm}>
                    <label>Name: </label>
                    <input />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
};

export default Contact;
