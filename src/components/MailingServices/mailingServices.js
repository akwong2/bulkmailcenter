import React from './node_modules/react';
import "./MailingServices.css";
import mail from '../../assets/mail.jpg';

const mailingServices = (props) => {
  return (
    <div>
      <h2>Mailing Services</h2>
  
      <div className="Mail">
        <img src={mail} alt="mailPic" />
        <div className="MailContent">
          <p>
            Using the most current and advance U.S. POSTAL SERVICE®-approved presort software, 
            and our knowledge of the postal regulations, we strive to provide the best mailing 
            services to suite your needs. U.S. POSTAL SERVICE® mailing regulations can be 
            complicated, but we will save you the headache by treating your projects as our own.
          </p>
          <p>
            You will save time and up to 30% on postage costs by relying on our knowledge 
            of the postal regulations.  As experts in the mailing industry, we offer complete 
            turnkey mailing services.
          </p>
          <p>
            City Print & Mail offers the following mailing services:
          </p>
          <ul>
            <li>Process mailing list in .txt (in tab delimited) file format</li>
            <li>CASS certification to standardize addresses</li>
            <li>Address Presorting</li>
            <li>Hand or Machine Collating & Nesting</li>
            <li>Bursting, Folding, Tabbing, and Sealing</li>
            <li>Envelope Insertion</li>
            <li>Automated Stamping / Metering</li>
            <li>Affixing Labels</li>
            <li>Inkjet Addressing</li>
            <li>Personalize Letters</li>
            <li>Drop off at USPS Business Mail Unit</li>
          </ul>
          <h3>EDDM</h3>
          <p>
            Every Door Direct Mail® from the U.S. Postal Service®, is designed to 
            help you reach every home, every address, every time.
          </p>
          <p>
            You can map out a target area, use demographic data (e.g. age, 
            household income, and size) to select a delivery route, choose a mailing 
            drop off date. And, you can create your mailings up to 30 days before you 
            plan to mail them.
          </p>
          <p>
            Let us help your next project and reach out every door at your neighborhood.
          </p>
        </div> 
      </div>
    </div>
  )
};

export default mailingServices;
