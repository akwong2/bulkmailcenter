import React, { Component } from 'react';
import axios from 'axios'

class Contact extends Component {

    submitForm = (event) => {
        event.preventDefault();
        const contact = {
            firstName: "DEEDEE",
            lastName: "Kwong"
        }
        console.log(contact)
        // axios.post(`http://${window.location.hostname}:5000/submitContact`, contact)
        //     .then(res => console.log(res))
        //     .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <h2>Contact Us</h2>
                <p>
                    Please complete this form to get more information about our company, 
                    products, or services. Comments and suggestions are always welcome.
                </p>
                <form onSubmit={this.submitForm}>
                    <label>Name: </label>
                    <input />
                    <label>Email Address: </label>
                    <label>Phone Number: </label>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
};

export default Contact;
