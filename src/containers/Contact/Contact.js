import React, { Component } from 'react';
// import axios from 'axios';
import './Contact.css';
import contact from '../../assets/contact.jpg';

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
    const url = `http://${window.location.hostname}:9000/api/submitContact`
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(contact),
      headers: { 'Content-Type': 'application/json'}
    }) 
    .then(res => {
      console.log(res)
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
        <div className="Contact">  
          <img src={contact} alt="contactPic" />
          <div className="ContactContent">
            <p>
              Please complete this form to get more information about our company, 
              products, or services. Comments and suggestions are always welcome.
            </p>
            <p className={this.state.success ? "Success" : "Error"}>{message}</p>
            <form onSubmit={this.submitForm}>
              <label>Name</label>
              <input required 
                name="name" 
                value={name} 
                onChange={this.handleChange}/> 
              <label>Email Address</label>
              <input required 
                name="email" 
                value={email} 
                onChange={this.handleChange} 
                type="email"/>
              <label>Phone Number</label>
              <input 
                name="phone" 
                value={phone} 
                onChange={this.handleChange}/>
              <label>Comments</label>
              <textarea rows="10" cols="50" 
                name="comment" 
                value={comment} 
                onChange={this.handleChange}/>
              <button className="Send">Send</button>
              <button className="Reset" onClick={this.resetForm}>Reset</button>
            </form>
          </div>  
        </div>
      </div>
    )
  }
};

export default Contact;
