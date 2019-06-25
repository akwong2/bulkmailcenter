import React, { Component } from 'react';
import axios from 'axios';
import './Contact.css';

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            phone: '',
            comment: '',
            success: null
        };
        this.baseState = this.state
    }

    resetForm = () => {
        this.setState(this.baseState);
    }

    submitForm = (event) => {
        event.preventDefault();
        const contact = {
            ...this.state
        }
        axios.post(`http://${window.location.hostname}:5000/submitContact`, contact)
            .then(res => {
                this.setState({success: true})
            })
            .catch(err => {
                this.setState({success: false})
                console.log(err)
            })
    }
    handleChange = (event) => {
        this.setState({[event.target.name] : event.target.value}); 
    }

    render() {
        const {name, email, phone, comment} = this.state;
        let message = null;
        if (this.state.success === true) {
            message = "Thank you for your comment/suggestion!"
        }
        else if (this.state.success === false){
            message = "There was an error"
        }
        return (
            <div>
                <h2>Contact Us</h2>
                <p>
                    Please complete this form to get more information about our company, 
                    products, or services. Comments and suggestions are always welcome.
                </p>
                <p className={this.state.success ? "Success" : "Error"}>{message}</p>
                <form onSubmit={this.submitForm}>
                    <label>Name: </label>
                    <br/>
                    <input required name="name" value={name} onChange={this.handleChange}/> 
                    <br/>
                    <label>Email Address: </label>
                    <br/>
                    <input required name="email" value={email} onChange={this.handleChange}/>
                    <br/>
                    <label>Phone Number: </label>
                    <br/>
                    <input name="phone" value={phone} onChange={this.handleChange}/>
                    <br/>
                    <label>Comments: </label>
                    <br/>
                    <textarea name="comment" value={comment} onChange={this.handleChange}/>
                    <br/>
                    <button onClick={this.resetForm}>Reset</button>
                    <button>Send</button>
                </form>
            </div>
        )
    }
};

export default Contact;
